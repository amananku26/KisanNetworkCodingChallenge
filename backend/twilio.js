require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const sendSms = ( otp,name,contact,message) => {
  const client = require("twilio")(accountSid, authToken);
  client.messages
    .create({
      body: ` ${message}  ${otp}`,
      from: "+12407021964",
      to: contact,
    })
    .then((message) => console.log(message))
    .catch((err)=> console.log(err))
};
module.exports = sendSms;