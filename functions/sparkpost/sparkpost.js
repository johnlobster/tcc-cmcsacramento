const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST_API_KEY);

exports.handler = function (event, context, callback) {
  console.log(`SparkPost: `)
  client.transmissions
    .send({
      content: {
        from: 'chris@css-tricks.com',
        subject: 'Automated Email using sparkpost',
        html:
          "<html><body><p>My cool email.</p></body></html>"
      },
      recipients: [{ address: 'johnlobster@comcast.net' }]
    });
}