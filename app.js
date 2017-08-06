//install the express dependencies
var express = require("express");

//set the express app
var app = express();

//set the ejs template engine
app.set("view-engine", "ejs");

//serve static files
//static files using middleware
app.use(express.static("./public"));

//listen to a specific port
app.listen(3000);
console.log("Now you are listening to port 3000");
