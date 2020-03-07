

var express = require('express')
var bodyParser = require('body-parser');
var app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //


app.post('/api/userform', function(req, res) {
    const userData = {
         fname : req.body.firstname,
         lname : req.body.lastname,
         email : req.body.email,
         sub :req.body.subject,
         message: req.body.message,
    }
    // const fname = req.body.firstname;
    // const lname = req.body.lastname;
    // const email = req.body.email; 
    // const sub = req.body.subject;
    // const message = req.body.message;


    res.send(userData);
});

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})