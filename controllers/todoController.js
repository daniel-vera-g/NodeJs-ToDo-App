/**
Here comes everything what controlls the behaviour of the To Do listen
F.ex mainipulate the data, handling the routes ...
*/

// export the modile to the app.js file
module.exports = function(app){
  //make the handlers for the different requests we are going to get

  //handler for the request for the url
  //render a view when get request to url
  app.get("/todo", function(req, res){
    //render page
    res.render("todo");

  })

  //handler for the post request of a Button
  app.post("/todo", function(req, res){

  })

  //handler for a delete request
  app.delete("/todo", function(req, res){

  })
}
