const mysql      = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'louis',
  password : 'dolfant',
  database : 'homer'
});
module.exports  =  connection;