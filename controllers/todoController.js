/**
Here comes everything what controlls the behaviour of the To Do listen
F.ex mainipulate the data, handling the routes ...
*/

//require the body-parser package
var bodyParser = require("body-parser");

//make array of Objects to add To-Do List item
var data = [];
//middleware to run in post request 
// parse application/x-www-form-urlencoded 
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// export the modile to the app.js file
module.exports = function(app){
  //make the handlers for the different requests we are going to get

  //handler for the request for the url
  //render a view when get request to url
  app.get("/todo", function(req, res){
    //render page
    //Pass data from the data array to the view
    res.render("todo", {todos: data});

  })

  //handler for the post request of a Button
  app.post("/todo", urlencodedParser, function(req, res){
    //push data from the body to the array containing the todo items 
    data.push(req.body);
    //send data back to the response and actualize array
    res.json(data);
  })

  //handler for a delete request
  app.delete("/todo", function(req, res){

  })
}
