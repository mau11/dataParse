var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static('./public'));

app.get('/', function (req, res){
  res.sendFile('/public/index.html');
});

app.listen(port, function(){
  console.log('Listening on port: ' + port);
});
