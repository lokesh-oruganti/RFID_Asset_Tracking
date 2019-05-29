var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : config.host,
  user     : config.user,
  password : config.pass,
  database : config.db,
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});