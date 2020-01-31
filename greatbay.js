var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Fr33dum!",
  database: "GreatBayDB"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});
function afterConnection() {
    start();


  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function start() {
  return inquirer
    .prompt({
      name: "postorbid",
      type: "list",
      message: "Would you like to post or bid?",
      choices: ["POST", "BID", "EXIT"]
    })
    .then(function(answer) {
      if (answer.postorbid === "POST") {
        postAuction();
      } else if (answer.postorbid === "BID") {
        readProducts();
        // bidAuction();
      } else {
        connection.end();
      }
    });
}

start();
