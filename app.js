var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.post('/calculator', function(req,res){
    console.log('Message post was a hit!');
    res.sendStatus(201);
});

app.listen(port, function(){
    console.log('Running on port', port);
});