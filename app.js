/**
Entry point for our Application
*/

/**
Split my code into Logicall modulues to keep things organized
Use simple MVC structure
1. model
2. views
3. controlls
*/

//install the express dependencies
var express = require("express");
//require the controller to control the behaviour of the app
var todoController = require("./controllers/todoController");
//set the express app
var app = express();




//set the ejs template engine
//the ejs template engine looks inside every view and looks for the respective file
app.set("view engine", "ejs");

//serve static files
//static files using middleware
app.use(express.static("./public"));

//fire controllers and give the app as the parameters so the controller can work with it
todoController(app);

//listen to a specific port
app.listen(3000);
console.log("Now you are listening to port 3000");
