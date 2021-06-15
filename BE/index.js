const express = require("express");
var cors = require('cors');
var app = express();
app.use(cors());

var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.get("/get-numbers", cors(corsOptions), function(request,response){
  response.send({valuePi: pi})
});

var pi = 3;
var x = 2;

// Nilakantha series algorithm 
// π = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
for (var count = 1; count < 500000; count++) {
  if (count % 2) {
    pi = pi + (4/(x * (x+1) * (x+2)));
  } else {
    pi = pi - (4/(x * (x+1) * (x+2)));
  }
  x += 2;
}

app.listen(3080, function () {
  console.log("Started application on port %d", 3080);
});