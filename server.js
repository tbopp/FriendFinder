// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const apiRoutes = require("./app/routing/apiRoutes")
const friends = require("./app/data/friends");


// Sets up the Express App
const app = express();
const port = process.env.port || 3000;
// const router = express.Router();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Defining static file paths for HTML and JS files
// app.use(express.static(__dirname + '/app/public')); 
// app.use(express.static(__dirname + '/app/data'));
// app.use(express.static(__dirname + '/app/routing'));

// HTML ROUTES 
// ==========================================

// Two specific routings, one for the survey page and another for a 'catch-all', for re-direct all other unrecognizable routes back to the home pge.
app.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


// API ROUTES 
// ==========================================

// Displays all friends
app.get("/api/friends", (req, res) => {
  res.json(friends);
});


// Captures incoming survey results and then created a new friend object - takes in JSON input. Pushes to 'friends' array.
app.post("/api/friends", (req, res) => {
  // Create New Friends - takes in JSON input
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  const newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
  // Testing to see how RegEx Pattern made an impact
  console.log(newFriend);
  
  // Pushing new friend object into Friends array
  friends.push(newFriend);

  res.json(newFriend);
});

// catch-all for all unrecognizable routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

// router.route('/api/friends').get(apiRoutes.getFriends);
// router.route('/api/friends').post(apiRoutes.postFriends);


// Starts the express web server to begin listening
app.listen(port, () => {
    console.log("App listening on http://localhost:" + port);
  });