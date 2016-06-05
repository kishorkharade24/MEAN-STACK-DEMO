var express =require('express');
var app =express();
var bodyParser = require('body-parser');
var mongoose =require('mongoose');
var path = require('path');

var customers = require('./routes/customers');
var invoices =require('./routes/invoices');

//Mongoose Connect
mongoose.connect(process.env.DBPATH);
var db =mongoose.connection;

app.use(express.static(__dirname+ '/client'));
app.use(bodyParser.json());
app.use('/client',express.static(__dirname + '/client'));

app.get('/',function (req,res) {
   res.sendFile(path.join(__dirname + '/client/index.html'));
});


app.use('/api/customers',customers);
app.use('/api/invoices',invoices);

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Started on port '+ port);
