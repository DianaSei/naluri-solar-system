const express = require("express");
var cors = require('cors');
var app = express();
app.use(cors());

app.get("/get-numbers",function(request,response){
  response.send({valuePi: pi})
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