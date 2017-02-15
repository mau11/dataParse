var mysql = require('mysql');
var cred = require('./cred.js');

var connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  database: process.env.DB_DATABASE || 'challenge',
  password: process.env.DB_PASSWORD || ''
});
connection.connect(function(err){
  if(err){
    console.log('ERROR CONNECTING TO DATABASE: ', err);
    return;
  }
  console.log('SUCCESS, CONNECTED TO DATABASE');
});

// Create table, challenge if not created already
var makeTable = "CREATE TABLE IF NOT EXISTS questions (id int(11) NOT NULL AUTO_INCREMENT, question varchar(50) UNIQUE, answer varchar(10), distractors varchar (50), PRIMARY KEY (id)) ENGINE=InnoDB  DEFAULT CHARSET=utf8";

connection.query(makeTable, function(){});

module.exports = {
  connection: connection,
  mysql: mysql
};
