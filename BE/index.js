const express = require("express");
var app = express();

app.get("/",function(request,response){
  response.send("Hello World!")
});

app.listen(3080, function () {
  console.log("Started application on port %d", 3080);
});