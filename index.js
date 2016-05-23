var express = require('express');
var app = express();

//The welcome screen with directions how to formulate HTTP requests to be fizzbuzz-ed
//This page will show when the user visits http://localhost:3001
app.get('/', function(req,res){
  res.send("Hello, welcome to this RESTful fizzbuzz app. Please type an HTTP request of the following structure: </br></br> http://localhost:3001/api?    word= <b>word</b> &    max_value= <b>number</b> </br></br> Where the <b>word</b> is either <i>fizz</i>, <i>buzz</i>, or <i>fizzbuzz</i> and the <b>number</b> is any integer 1 or greater.")
});

//The meat of the application. Will take the query submitted within the HTTP request and formulate the output as described in the directions to this exercise
app.get('/api', function(req,res){
  //maxVal grabs the max value that is submitted via the HTTP request
  var maxVal = req.query.max_value;
  //the default status is error unless the HTTP request is coded correctly
  var status = 'error';
  //the default array of numbers is empty unless the HTTP request is coded correctly
  var numbers = [];
  //the following if statements parse thru the word being queried (either fizz, buzz, or fizzbuzz) and formulates the output accordingly
  if(req.query.word == 'fizzbuzz'){
    status = 'ok';
    //this loop will fill the numbers array with the correct values as pertaining to the rules of fizzbuzz
    for(var i = 1; i <= maxVal; i++){
      //fizzbuzz must be divisible by 3 and 5
      if(i%5 == 0 && i%3 ==0){
        numbers.push(i);
      }
    }
    //send the formulated response as JSON to the browser
    res.send({'status': status, 'numbers': numbers}).json;
  }
  else if(req.query.word == 'fizz'){
    status = 'ok';
    for(var i = 1; i <= maxVal; i++){
      //fizz must be divisible by 3
      if(i%3 == 0){
        numbers.push(i);
      }
    }
    res.send({'status': status, 'numbers': numbers}).json;
  }
  else if(req.query.word == 'buzz'){
    status = 'ok';
    for(var i = 1; i <= maxVal; i++){
      //buzz must be divisible by 5
      if(i%5 == 0){
        numbers.push(i);
      }
    }
    res.send({'status': status, 'numbers': numbers}).json;
  }
  else {
    //if the HTTP request is coded incorrectly make the response status to 400 and send an error status to the browser
    res.status(400).json({ 'status': status, 'numbers': numbers})
  }
});

//the port that the server is listening on
app.listen(3001, function(){
  console.log('welcome')
})
