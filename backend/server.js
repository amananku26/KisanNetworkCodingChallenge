
const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');

const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 8080;

const userDatabase = [];

// Create users endpoint
app.post('/users', (req, res) => {
  console.log(req.body)
  const { oyp, FirstName,SeconndName,contact,id, messageForOtp} = req.body.payload;
  const user = {
    oyp, FirstName,contact,id, messageForOtp
  };

  userDatabase.push(user);
  sendSms(user.oyp, user.FirstName ,user.contact,user.messageForOtp);
  let ts = Date.now();
  console.log(Math.floor(ts/1000));
  res.status(201).send({
    otp: user.oyp,
    name: `${user.FirstName} ${user.SeconndName}`,
    contact: user.contact,
    message:user.messageForOtp,
    time: Math.floor(ts/1000)
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;