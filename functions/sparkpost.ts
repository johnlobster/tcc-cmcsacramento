require("dotenv").config(); // add variables in .env file to process.env
import SparkPost from 'sparkpost';

exports.handler = async function (event, context, callback) {

  return new Promise((resolve, reject) => {
    const entryTime = new Date()
    console.log(`SparkPost: handler() called by website ${event.headers.host} ${entryTime}`)
    // console.log(event)
    const client = new SparkPost(
      process.env.SPARKPOST_API_KEY,
      {debug: true});
    // console.log(client)
    client.transmissions
      .send({
        options: { sandbox: true },
        content: {
          from: 'testing@sparkpostbox.com',
          subject: 'Automated Email using sparkpost',
          html:
            "<html><body><p>My cool email.</p></body></html>"
        },
        recipients: [{ address: 'johnlobster@comcast.net' }]
      })
      .then((res) => {
        const exitTime = new Date()
        const runTime = new Date(exitTime.valueOf() - entryTime.valueOf())
        console.log(`SparkPost: successful, mail sent after ${runTime.getSeconds()} seconds`)
        console.log(res)
        resolve (
          {
            statusCode: 200,
            body: `sparkpost.ts completed in ${runTime.getSeconds()} seconds`,
          }

        )
      })
      .catch((err) => {
        const exitTime = new Date()
        const runTime = new Date(exitTime.valueOf() - entryTime.valueOf())
        console.log(`SparkPost: Error returned ${err} after ${runTime.getSeconds()} seconds`)
        // using resolve so error is not propagated
        resolve (
          {
            statusCode: 400,
            body: `Sparkpost: Error ${err} received after ${runTime.getSeconds()} seconds`,
          }

        )
      })

  })
  
  // const sparky = new SparkPost('<YOUR API KEY>');

  // sparky.transmissions.send({
  //   options: { sandbox: true },
  //   content: {
  //     from: 'testing@sparkpostbox.com',
  //     subject: 'Oh hey',
  //     html: '<html><body><p>Testing SparkPost - the most awesomest email service!</p></body></html>'
  //   },
  //   recipients: [{ address: 'developers+nodejs@sparkpost.com' }]
  // })
  //   .then(data => {
  //     console.log('Woohoo! You just sent your first mailing!');
  //   })
  //   .catch(err => {
  //     console.log('Whoops! Something went wrong');
  //   });
}