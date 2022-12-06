const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  //res.sendFile(__dirname + "/index.html");
  //res.send("hello word");
  var today = new Date();
  if(today.getDay() === 6 || today.getDay() === 0){
    res.send("yeye!! today is weekend .. lets enjoy");
  }
  else{
    res.send("oh no!! today is weekday .. we gotta work");
  }

});

app.listen(3000, function(){
  console.log("server start at port 3000");
})
