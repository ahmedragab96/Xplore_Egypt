var express = require('express');
var mail = express.Router();
const db = require('../app/config/db');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Explore.Egypt.2019@gmail.com',
    pass: 'gradproject'
  }
});
mail.post('/', (req, res) => {
  const userid = req.body.id;
  const plan = req.body.plan;
   var titles=[];

   for(var i=0;i<plan.length;i++)
   {
       titles.push({"trip":plan[i]["title"],"start":plan[i]["start"]});
   }
 
   
   let query="SELECT email,first_name FROM users WHERE ID = ?";
   db.query(query, [userid], (error, results, fields) => {
    if (error) {return console.error(error.message);}
   var userMail=results[0]["email"];
   var userName=results[0]["first_name"];


    var Text1="<h1> Hello "+userName+" </h1> <br> you have successfully saved these trips in to your calender: <br> ";
    // var Text2=JSON.stringify(titles, null, 4);
    var Text2='';
    for(var i=0;i<titles.length;i++)
    {
      Text2+= "("+(i+1)+")" + " <h3 > " + JSON.stringify(titles[i]["trip"]) + " </h3>  starts : "+ titles[i]["start"] +" <br> ";
    }
    // console.log(Text2);
    var Text3=" <br> for more info or editions , visit your : <a href='http://localhost:4200/planner'> Calender </a> ";
    // console.log(Text1+Text2+Text3);
   
    var mailOptions = {
      from: 'Nourhan241295@gmail.com',
      to: userMail,
      subject: 'Explore Egypt',
      html: Text1+Text2+Text3
      };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log(error);
      } else {
          console.log('Email sent: ' + info.response);
      }
      });
});
 

   

res.send("email successfully sent");
    

});
module.exports = mail;