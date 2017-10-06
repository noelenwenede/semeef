var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('trust proxy', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// http://www.geoplugin.net/json.gp?ip=192.168.56.1

app.get('/', function(req, res){
    console.log(req.ip);
    res.sendFile(path.resolve('./semeef/index.html'));
});

app.use(express.static(path.resolve('semeef')));

app.listen(8080, function(){
    console.log('app listen on 8080');
});


