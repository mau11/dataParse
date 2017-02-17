var fs = require('fs');
var db = require('./db/db.js');

// Seed data from csv file to mysql database
fs.readFile('./data/allQuestions.csv', function(err, data){
  var question;
  var correct;
  var other;
  if(err){
    throw err;
  }
  var rows = Buffer(data).toString().split('\r\n');
  for(var i = 0; i < rows.length; i++){
    rows[i] = rows[i].split('|');
    var len = rows[i].length;
    for(var j = 2; j < len; j++){
      question = rows[i][0];
      correct = rows[i][1];
      other = rows[i][j];
      var addCsv = "INSERT IGNORE INTO questions (question, answer, distractors) VALUES ('"+ question +"'"+","+"'"+ correct +"'"+","+"'"+ other + "')";
      db.connection.query(addCsv, function(err, rows){
        if(err){
          throw err;
        }
      });
    }
  }
  db.connection.end(function(err){
    console.log('Data added to db. Connection closed.');
  });
});
