var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.port || 3000, function(){
  console.log('App listening on port 8080!');
});
