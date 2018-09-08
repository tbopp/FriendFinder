// Dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Sets up the Express App
const app = express();
const port = process.env.port || 3000;
// const router = express.Router();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("app/public"));

// Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Starts the express web server to begin listening
app.listen(port, () => {
    console.log("App listening on http://localhost:" + port);
  });