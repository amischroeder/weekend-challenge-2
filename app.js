var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 5000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.post('/calculator', function(req,res){
    console.log(req.body);
    console.log('Message post was a hit!');
    res.send(req.body);
});

app.get('/calculator', function(req,res){
    res.send(req.body);
})

app.listen(port, function(){
    console.log('Running on port', port);
});