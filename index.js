var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send('hello')
});

app.get('/api', function(req,res){
  var maxVal = req.query.max_value;
  var status = 'error';
  var numbers = [];
  if(req.query.word == 'fizzbuzz'){
    status = 'ok';
    for(var i = 1; i <= maxVal; i++){
      if(i%5 == 0 && i%3 ==0){
        numbers.push(i);
      }
    }
    res.send({'status': status, 'numbers': numbers}).json;
  }
  else if(req.query.word == 'fizz'){
    status = 'ok';
    for(var i = 1; i <= maxVal; i++){
      if(i%3 == 0){
        numbers.push(i);
      }
    }
    res.send({'status': status, 'numbers': numbers}).json;
  }
  else if(req.query.word == 'buzz'){
    status = 'ok';
    for(var i = 1; i <= maxVal; i++){
      if(i%5 == 0){
        numbers.push(i);
      }
    }
    res.send({'status': status, 'numbers': numbers}).json;
  }
  else {
    res.status(400).json({ 'status': status, 'numbers': numbers})
  }
});

app.listen(3001, function(){
  console.log('welcome')
})
