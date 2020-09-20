var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "r00t",
  database: "web-widget",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//con.destroy();
