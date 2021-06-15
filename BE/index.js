const express = require("express");
var app = express();

app.get("/",function(request,response){
  response.send("Hello World!")
});

var pi = 3;
var x = 2;

for (var count = 1; count < 500000; count++) {
  if (count % 2) {
    pi = pi + (4/(x * (x+1) * (x+2)));
  } else {
    pi = pi - (4/(x * (x+1) * (x+2)));
  }
  x += 2;
}

app.listen(3080, function () {
  console.log("Started application on port %d", 3080, pi);
});