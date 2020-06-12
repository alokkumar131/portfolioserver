
var express = require('express')
var bodyParser = require('body-parser');

var cors = require('cors');
const mainController = require('./controller/main.js')


var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(bodyParser.raw());
app.use(cors());





app.get('/', mainController.getGraphics)
app.get('/ui', mainController.getUi)
app.get('/web', mainController.getWeb)
app.post('/api/userform', mainController.getUserForm);



app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})
