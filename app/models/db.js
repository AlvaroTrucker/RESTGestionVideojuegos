var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'usuario',
  password : 'usuario',
  database: 'rest'
});

connection.connect();

module.exports = connection;