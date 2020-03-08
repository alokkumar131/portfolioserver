

var express = require('express')
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //

app.get('/',(req,res)=>{
    res.send('<h1>portfolio server running</h1>')
})


app.post('/api/userform', function(req, res) {
    const userData = {
         fname : req.body.firstname,
         lname : req.body.lastname,
         email : req.body.email,
         sub :req.body.subject,
         message: req.body.message,
    }

    res.send(userData);
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: false,   
        auth: {
          user: 'alokkumarpadhi3@gmail.com',
          pass: 'Nipu@2023'
        }
      });
      
      var mailOptions = {
        from: 'alokkumarpadhi3@gmail.com',
        to: 'alokkumarpadhi3@gmail.com',
        subject: userData.sub,
        html: `<table width="640" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#fff">
        <tr>
          <td height="10" style="font-size:10px; line-height:10px;">&nbsp;</td>
        </tr>
        <tr>
          <td>
      
            <table width="600" cellpadding="0" cellspacing="0" border="0" class="container" >
              <tr bgcolor="#00065c" style="background-color: #00065c">
                <td align="center"  bgcolor="#00065c"
                style="padding:10px 0px;background-color: #00065c;
                ">
                  <img src="https://alokkumar131.github.io/alokkumar/img/logo.png" alt="" height="40" width="80">
                </td>
              </tr>
            </table>
            <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
                <tr >
                  <td align="left" valign="top" bgcolor="ff6600"  align="center"
                   style="padding:20px;font-family:Arial, Helvetica, sans-serif;color: #fff;">
                      <h3>Name: ${userData.fname} ${userData.lname}</h3>
                      <h3 style="color:#fff">Email: ${userData.email}</h3>
                      <h3>Message: </h3>
                      <p>${userData.message}</p>
                  </td>
                </tr>
              </table>
      
          </td>
        </tr>
        <tr>
          <td height="10" style="font-size:10px; line-height:10px;">&nbsp;</td>
        </tr>
      </table>  
        `
      };
    
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });  
});



app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})