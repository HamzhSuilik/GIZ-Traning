// npm install body-parser
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({ extend: false }));

app.get('/', function(req,res){
    res.sendFile(path.resolve('./index.html'));
});
app.post('/', function(req,res){
    let name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' : submited successfully :)');
});

app.listen(5000,function(req,res){
    console.log('Node server is runnning now :) ')
});