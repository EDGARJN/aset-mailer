// require express
const express = require("express");
var app = express()
const mailer = require("nodemailer");
require("dotenv/config");

let transporter = mailer.createTransport({
    service: 'gmail',
    auth: { 
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });
 
  var data = "Hi TESTER";

  let mailOptions = {
    from: 'your email',
    to: 'receiver email',
    subject: 'ASET Inc',
    text: data
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

  app.listen(9000,()=>{console.log("Server Listenning on port 9000")})