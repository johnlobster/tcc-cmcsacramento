require("dotenv").config(); // add variables in .env file to process.env

// import dotenv from 'dotenv'
import * as nodemailer from "nodemailer"
import smtpTransport from 'nodemailer-smtp-transport'

import { APIGatewayEvent} from 'aws-lambda'

// dotenv.config() // Note, potential bug if nodemailer needed environment variables set up

/*

  send email to all addresses on EMAIL_LIST using SMTP (nodemailer) - setup in .env file 
*/
// code taken from mailLambda repo. This is specific only to the cmc Sacramento website

// variables here, were environment variables in generic mailer version
const subject = "Contact received from CMC Sacramento web page"
/*
  Contact from ${website} received ${date}

  JSON printout or plain text

  Sent by "mailer.js"
*/

/* event object supplied by Netlify
{
    "path": "Path parameter",
    "httpMethod": "Incoming request's method name" (POST/GET)
    "headers": {Incoming request headers}
    "queryStringParameters": {query string parameters }
    "body": "A JSON string of the request payload."
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
}
*/


// pretty print body object
const ppBody = (body:  object | string | number ): string  => {
  let outputString = ""
  if (typeof (body) === "string") {
    outputString = body
  } else if  (typeof (body) === "number") {
    outputString = body.toString()
  } else {
    for (const [key, item] of Object.entries(body)) {
      outputString = `${outputString}
      ${key}
          ${ppBody(item)}
      ` 
    }
  }
  return outputString
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Main

export async function handler(event: APIGatewayEvent) {

  

  const entryTime = new Date()
  console.log(`Handler called by website ${event.headers.host} ${entryTime}`)
  console.log(event)
  // check all environment variables
  if (
    !process.env.EMAIL_ADDRESS ||
    !process.env.NODEMAILER_HOST ||
    !process.env.NODEMAILER_PORT ||
    !process.env.NODEMAILER_SECURE ||
    !process.env.NODEMAILER_AUTH_USERNAME ||
    !process.env.NODEMAILER_AUTH_PASSWORD
    ) {
    console.log("Missing environment variable required to access mail server")
    return {
      statusCode: 400,
      body: `Error: Missing environment variable required to access mail server`,
    }
  }
  if (!process.env.EMAIL_LIST) {
    console.log("No EMAIL_LIST supplied in .env file");
    return {
      statusCode: 400,
      body: `Error: No EMAIL_LIST supplied in .env file`,
    }
  }
  let emailList;
  try {
    emailList = JSON.parse(process.env.EMAIL_LIST)
  }
  catch (err) {
    console.log("EMAIL_LIST was invalid JSON")
    console.log(process.env.EMAIL_LIST)
    console.log(err)
    return {
      statusCode: 400,
      body: `Error: EMAIL_LIST was invalid JSON`,
    }
  }

  if ( event.httpMethod !== "POST") {
    console.log(`function called by ${event.headers.host} was not POST ( ${event.httpMethod})`)
    console.log(`Message body\n${event.body}`)
    return {
      statusCode: 400,
      body: `Error: function called by ${event.headers.host} was not POST ( ${event.httpMethod})`,
    }
  }
  
  
  /////////////////////////////////////////////////////////////////
  // Debug

  // console.log('Debug -----------------------------------')
  // console.log(event);
  // console.log('-----------------------------------------')
  // console.log('Transporter')
  // console.log(transporter)

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // set up nodemailer

  const setupOptions: smtpTransport.SmtpOptions = {
    host: process.env.NODEMAILER_HOST,
    port: parseInt(process.env.NODEMAILER_PORT),
    secure: process.env.NODEMAILER_SECURE !== "false",  // cast to boolean, default to secure
    auth: {
      user: process.env.NODEMAILER_AUTH_USERNAME,
      pass: process.env.NODEMAILER_AUTH_PASSWORD
    }
  }
  const transporter = nodemailer.createTransport(setupOptions);

  try {
    const tVerify = await transporter.verify() 
  }
  catch (err) {
    console.log("Mail server validation error")
    console.log(`Message body\n${event.body}`)
    console.log(err)
    return {
      statusCode: 400,
      body: `Error: Mail server validation error`,
    }
  }
    
  const sendTime = new Date()
  const rTime = new Date(sendTime.valueOf() - entryTime.valueOf())
  console.log(`Verified nodemailer connection after ${rTime.getSeconds()} seconds`)
  
  //////////////////////////////////////////////////////////////////////////////////
  // Send email to list

  /* NOTE
    since I last set this up, comcast changed something
    Now the from field needs to be set to your user Id
  */

  let messageBody = ""
  try {
    const mess = JSON.parse(event.body)
    messageBody = ppBody(mess)
  } 
  catch (err){
    messageBody = event.body
  }
  // console.log("Message body")
  // console.log(messageBody)
  const mailMessage = `
  A website contact from ${event.headers.host} was received ${entryTime.toDateString()}

  ${messageBody}

  Sent by "mailer.js" from ${event.path} ${entryTime.getHours()}:${entryTime.getMinutes()}:${entryTime.getSeconds()}
  `

  for ( let i = 0; i < emailList.length; i++ ) {
    try {
      console.log(`Sending mail message ${i + 1} to ${emailList[i]}`)
      const info = await transporter.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: emailList[i],
        subject: subject,
        text: mailMessage,
      });
    }
    catch (err) {
      console.log("Send mail error")
      console.log(`Message body\n${event.body}`)
      console.log(err)
      return {
        statusCode: 400,
        body: `Error: Mail server send error`,
      }
    }
  }
  
  const exitTime = new Date() 
  const runTime = new Date(exitTime.valueOf() - entryTime.valueOf())

  console.log(`Function completed at ${exitTime}`)
  console.log(`Function took ${runTime.getSeconds()} seconds to run. Started ${exitTime}\n\n`)
  return {
    statusCode: 200,
    body: `mailer.ts completed in ${runTime.getSeconds()} seconds`,
  }
}