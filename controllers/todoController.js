/**
Here comes everything what controlls the behaviour of the To Do listen
F.ex mainipulate the data, handling the routes ...
*/

//require the body-parser package
var bodyParser = require("body-parser");
//require the mongoose package to work with mongoDb
var mongoose = require("mongoose");
mongoose.Promise = global.Promise; // use native mongoose promises﻿

//connect with the database
mongoose.connect("mongodb://test:test@ds131061.mlab.com:31061/todo");

//Create Shema - like a Blueprint 
var todoShema = new mongoose.Schema({
    item: String
});

//create a model to base it to the shema
//now we are able to create new ToDo Items and push them to the data Base
//What kind of Information we have to expect
var Todo = mongoose.model("Todo", todoShema);

//make array of Objects to add To-Do List item
//var data = [];

//middleware to run in post request 
// parse application/x-www-form-urlencoded 
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// export the modile to the app.js file
module.exports = function(app){
  //make the handlers for the different requests we are going to get

  //handler for the request for the url
  //render a view when get request to url
  app.get("/todo", function(req, res){
    //get data from MongoDB and pas it to the view
    Todo.find({}, function(err, data){
      //render page
      //Pass data from the data array to the view
      res.render("todo", {todos: data});
    });
  })

  //handler for the post request of a Button
  app.post("/todo", urlencodedParser, function(req, res){
    //get data from the view and add it to mongoDB
    var newToDo = Todo(req.body).save(function(err, data){
      if (err) throw err;
      //send data back to the response and actualize array
      res.json(data);
    })
  })

  //handler for a delete request
  app.delete("/todo/:item", function(req, res){
    //delete the requested item from mongoDB
    Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });
}
