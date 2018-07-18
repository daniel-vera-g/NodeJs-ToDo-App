/**
Here comes everything what controlls the behaviour of the To Do listen
F.ex mainipulate the data, handling the routes ...
*/

// require the body-parser package:
const bodyParser = require("body-parser");
// require the mongoose package to work with mongoDb
const mongoose = require("mongoose");

mongoose.Promise = global.Promise; // use native mongoose promises﻿

// connect with the database
// TODO connect with env variables
mongoose.connect("");

// Create Shema - like a Blueprint
const todoShema = new mongoose.Schema({
	item: String,
});

// create a model to base it to the shema
// now we are able to create new ToDo Items and push them to the data Base
// What kind of Information we have to expect
const Todo = mongoose.model("Todo", todoShema);

// make array of Objects to add To-Do List item
// var data = [];

// middleware to run in post request
// parse application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// export the modile to the app.js file
module.exports = function (app) {
	// make the handlers for the different requests we are going to get

	// handler for the request for the url
	// render a view when get request to url
	app.get("/todo", (req, res) => {
		// get data from MongoDB and pas it to the view
		Todo.find({}, (err, data) => {
      //render page
      //Pass data from the data array to the view
      res.render("todo", {todos: data});
    });
	});

	// handler for the post request of a Button
	app.post("/todo", urlencodedParser, (req, res) => {
		// get data from the view and add it to mongoDB
		let newToDo = Todo(req.body).save((err, data) => {
      if (err) throw err;
      //send data back to the response and actualize array
      res.json(data);
    });
	});

	// handler for a delete request
	app.delete("/todo/:item", (req, res) => {
		// delete the requested item from mongoDB
		Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove((err, data) => {
      if (err) throw err;
      res.json(data);
    });
	});
};
