var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Nourhan241295@gmail.com',
    pass: 'ilovemum'
  }
});

var mailOptions = {
  from: 'Nourhan241295@gmail.com',
  to: 'Nourhan_195@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
