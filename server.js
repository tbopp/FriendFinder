// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


// Sets up the Express App
const app = express();
const port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// Starts the express web server to begin listening
app.listen(port, function() {
    console.log("App listening on http://localhost/" + port);
  });