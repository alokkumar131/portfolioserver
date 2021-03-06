var fs = require("fs");
var nodemailer = require('nodemailer');

const graphics = JSON.parse(fs.readFileSync(`${__dirname}/../data/graphics.json`));
const ui =  JSON.parse(fs.readFileSync(`${__dirname}/../data/ui.json`))
const web =  JSON.parse(fs.readFileSync(`${__dirname}/../data/web.json`));

module.exports.getGraphics = (req,res)=>{
    res.status(200).json(graphics);
}
module.exports.getUi =(req,res)=>{
    res.status(200).send(ui);
}
module.exports.getWeb =(req,res)=>{
    res.status(200).send(web);
}

module.exports.getUserForm = (req, res)=> {

    const userData = {
         name : req.body.name,
         email : req.body.email,
         sub :req.body.subject,
         message: req.body.message,
    }

    res.status(200).json(userData);

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
                      <h3>Name: ${userData.name}</h3>
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
    
      transporter.sendMail(mailOptions, (error, info)=>{
        if (error) {
          return error;
        } else {
          return `Email sent:  ${info.response}`
        }
      });  
}