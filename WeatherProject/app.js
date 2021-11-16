const { log } = require('console');
const express = require("express");
const https = require("https");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', function (req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  const query = req.body.cityName;
  const apiKey = "753fa6628b86f18700867006e02ad5e1";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){

      const weatherData = JSON.parse(data);
      const weatherDescription = weatherData.weather[0].description;
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      
      res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
      res.write("<p>The weather in currently " + weatherDescription + "</p>");
      res.write("<img src=" + imageURL + ">");
    });
  });

});


app.listen(3000, function() {
  console.log("Server is running on port 3000");
});