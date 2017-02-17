var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var requests = require('./db/requests.js');

app.use(express.static('./public'));

app.get('/', function (req, res){
  res.sendFile('/public/index.html');
});

// Get questions from db
app.get('/api/questions', requests.getAll);

app.listen(port, function(){
  console.log('Listening on port: ' + port);
});
