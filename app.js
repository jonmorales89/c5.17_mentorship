const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

app.post('/mail', (req, res) => {
  // If you're going to use your own email
  // You may have to allow less secure apps
  // My Account >> Sign-in & Security >> Connected apps & sites >> Allow less secure apps: ON

  // You're free to use whatever service you would like
  console.log('This is the req.body', req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Dansu.Mentoru@gmail.com',
      pass: 'Dennis123'
    }
  });

  const mailOptions = {
    from: 'Dansu.Mentoru@gmail.com', // May not even need to include it here
    to: 'Dansu.Mentoru@gmail.com', // req.body.email.to,
    subject: req.body.data.name, // req.body.subject
    text: `${'About Me: ' +
      req.body.data.text_one +
      ' Questions: ' +
      req.body.data.text_two}` // req.body.text
  };
  console.log('Mail options:', mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent successfully' + info.response);
    }
  });
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, (req, res) => {
	console.log("We're listening on PORT, ", PORT);
});
