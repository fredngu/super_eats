const dotenv = require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: process.env.MY_PHONE_NUMBER,
  from: process.env.MY_PHONE_NUMBER,
  body: 'TEST'
})
.then((message) => {
  console.log(message.sid)
})
