//jshint esvsersion:6

const express = require('express');

const app = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: parkyena2@gmail.com");
});

app.get("/about", function(req, res){
  res.send("My name is Yena, and I'm a novice web developer. This is my first hosting page.");
});

app.get("/hobbies", function(req, res){
  res.send("I love to playing Pokemon game and Animal Crossing.");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
