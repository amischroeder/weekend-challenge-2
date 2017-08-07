var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 5000;
var mathResult = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

function calculator(x,y,z){
    if (z === 'add'){
        mathResult = [parseInt(x) + parseInt(y)]
    } else if (z === 'subtract'){
        mathResult = [parseInt(x) - parseInt(y)]
    } else if (z === 'multiply'){
        mathResult = [parseInt(x) * parseInt(y)]
    } else if (z === 'divide')
    {
        mathResult = [parseInt(x) / parseInt(y)]
    }
};

app.post('/calculator', function(req,res){
    console.log('message post was hit!');
    calculator(req.body.firstInput, req.body.secondInput, req.body.type);
    console.log(mathResult);
    res.sendStatus(201);
});

app.get('/calculator', function(req,res){
    res.send(mathResult);
})

app.listen(port, function(){
    console.log('Running on port', port);
});

