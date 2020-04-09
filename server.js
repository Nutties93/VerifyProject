// server.js
// where your node app starts

require('dotenv').config();

// init server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const Nexmo = require('nexmo');
const SmsProxy = require('./SmsProxy');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// Create and Initialize Nexmo client
const nexmo = new Nexmo({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
}, {debug: true});

//SMS demo
app.post('/getsms', function(req, res) {
  // console.log("im in!!!")
  console.log(req.body.from)
    nexmo.message.sendSms(req.body.from, req.body.to, req.body.text,{
      type: "unicode",
    }, (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if (responseData.messages[0]['status'] === "0") {
          console.log("Message sent successfully.");
          console.log(responseData)
          res.send({response: responseData.messages[0]})
        } else {
          console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
      }
  });
});

// API FOR VERIFY application
app.post('/verify', (req, res) => {
  // Start the verification process
  verifyRequestNumber = req.body.username;
  nexmo.verify.request({
      number: verifyRequestNumber,
      brand: process.env.BRAND_NAME
  }, (err, result) => {
      if (err) {
          console.error(err);
      } else {
        
        if (result.status === "0") {
          verifyRequestId = result.request_id;
          console.log(`request_id: ${verifyRequestId}`);
          console.log(`status: ${result.status}`);
          res.send({response: result})
        }else{
          console.log(`Request was unsuccesful!`);
        }
      }
  });
});

app.post('/checkverify', (req, res) => {
  // Check the code provided by the user
  nexmo.verify.check({
      request_id: req.body.request_id,
      code: req.body.code
  }, (err, result) => {
      if (err) {
          console.error(err);
      } else {
          if (result.status == 0) {
            console.log(`Check Verify API successful`)
            console.log(`request_id: ${result.request_id}`);
            res.send({response: result})
          }else{

          }
      }
  });
});


//Private SMS application
const smsProxy = new SmsProxy();

// Handle and route incoming SMS to virtual numbers
app.post('/webhooks/inbound-sms', (req, res) => {
  const from = req.body.msisdn;
  const to = req.body.to;
  const text = req.body.text;

  // Route virtual number to real number
  smsProxy.proxySms(from, text);

  // res.sendStatus(204);
  res.status(200).end();
});

// Start a chat
app.post('/chat', (req, res) => {
  const userANumber = req.body.userANumber;
  const userBNumber = req.body.userBNumber;

  smsProxy.createChat(userANumber, userBNumber, (err, result) => {
      if (err) {
          res.status(500).json(err);
      }
      else {
          res.json(result);
          // res.send({response: result})
      }
  });
  res.send('OK');
});



if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
