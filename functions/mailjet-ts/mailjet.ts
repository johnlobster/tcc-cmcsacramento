require("dotenv").config(); // add variables in .env file to process.env

// const mailjet = require('node-mailjet')
//   .connect(process.env.MAILJET_KEY_1, process.env.MAILJET_KEY_2)

import mailjet from 'node-mailjet'
import { APIGatewayEvent } from 'aws-lambda'

// pretty print body object
const ppBody = (body: object | string | number): string => {
  let outputString = ""
  if (typeof (body) === "string") {
    outputString = body
  } else if (typeof (body) === "number") {
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

export async function handler(event: APIGatewayEvent) {
  
  return new Promise((resolve, reject) => {
    
    const mailjetConnection = mailjet.connect(process.env.MAILJET_KEY_1, process.env.MAILJET_KEY_2)
    console.log(mailjetConnection)
    const entryTime = new Date()
    console.log(`Handler called by website ${event.headers.host} ${entryTime}`)
    console.log(event)
    
    // get list of people to send email to
    if (!process.env.EMAIL_LIST) {
      console.log("No EMAIL_LIST supplied in .env file");
      reject ({
        statusCode: 400,
        body: `Error: No EMAIL_LIST supplied in .env file`,
      })
    }
    let emailList;
    try {
      emailList = JSON.parse(process.env.EMAIL_LIST)
    }
    catch (err) {
      console.log("EMAIL_LIST was invalid JSON")
      console.log(process.env.EMAIL_LIST)
      console.log(err)
      reject ({
        statusCode: 400,
        body: `Error: EMAIL_LIST was invalid JSON`,
      })
    }

    if (event.httpMethod !== "POST") {
      console.log(`function called by ${event.headers.host} was not POST ( ${event.httpMethod})`)
      console.log(`Message body\n${event.body}`)
      reject ({
        statusCode: 400,
        body: `Error: function called by ${event.headers.host} was not POST ( ${event.httpMethod})`,
      })
    }

    let messageBody = ""
    try {
      const mess = JSON.parse(event.body)
      messageBody = ppBody(mess)
    }
    catch (err) {
      messageBody = event.body
    }
    // console.log("Message body")
    // console.log(messageBody)
    const mailMessage = `
      A website contact from ${event.headers.host} was received ${entryTime.toDateString()}

      ${messageBody}

      Sent by "mailjet.ts" from ${event.path} ${entryTime.getHours()}:${entryTime.getMinutes()}:${entryTime.getSeconds()}
    `
    const request = mailjetConnection
    .post("send", { 'version': 'v3.1' })
    .request({
      "Messages": [
        {
          "From": {
            "Email": "johnlobster@comcast.net",
            "Name": "John"
          },
          "To": [
            {
              "Email": "johnlobster@comcast.net",
              "Name": "John"
            }
          ],
          "Subject": "Contact received from CMC Sacramento web page",
          "TextPart": mailMessage 
          
        }
      ]
    })
    
    request
    .then((result) => {
      const exitTime = new Date()
      const runTime = new Date(exitTime.valueOf() - entryTime.valueOf())
      console.log(`Mailjet: successful, mail sent after ${runTime.getSeconds()} seconds`)
      console.log(result.body)
      resolve(
        {
          statusCode: 200,
          body: `mailjet.ts completed in ${runTime.getSeconds()} seconds`,
        }
        
        )
      })
    .catch((err) => {
        const exitTime = new Date()
        const runTime = new Date(exitTime.valueOf() - entryTime.valueOf())
        console.log(`Mailjet: request returned error: ${err.ErrorMessage} (http status ${err.statusCode}) after ${runTime.getSeconds()} seconds`)
        // console.log(err)
        // using resolve so error is not propagated
        resolve(
          {
            statusCode: 400,
            body: `Mailjet: request returned error: ${err.ErrorMessage} (http status ${err.statusCode})  received after ${runTime.getSeconds()} seconds`,
          }
          
          )
    })
        
  })
      
}
  