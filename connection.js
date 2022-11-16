const res = require("express/lib/response");
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "a2z"
});

module.exports = con;


