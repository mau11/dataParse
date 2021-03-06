var db = require('./db.js');

var getAll = function(req, res){
  var all = [];
  var getQuests = "SELECT * FROM questions";
  db.connection.query(getQuests, function(err, rows){
    if(err){
      throw err;
    }
    for(var i = 0; i < rows.length; i++){
      all.push(rows[i]);
    }
    res.send(all);
  });
};

module.exports = {
  db: db,
  getAll: getAll
}
