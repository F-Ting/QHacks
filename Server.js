// This is an easier version of app.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//set our port number
var port = 8000;

var router = express.Router();

//Look for statics first
app.use(express.static(path.join(__dirname, '/')));
//Return the index for any other GET request
app.get('/*', function (req, res) {
    res.sendFile('test.html', {root: path.join(__dirname, '/')});
});

app.use('/', router);

app.listen(port);
console.log('Port ' + port + ' is working');
