// Dependencies
const friends = require("../data/friends.js");

module.exports = (app) => {
    
// Displays all friends
app.get("/api/friends", (req, res) => {
    res.json(friends);
  });
  
  // Captures survey results
  app.post("/api/friends", (req, res) => {
    
    // Stores the survey results into a 'newFriend' object
    const newFriend = req.body;
    
    // Matches friends based on 
    let matchName = "";
    let matchImage = "";
    let total = 10000;
    for (let i = 0; i < friends.length; i++) {
      let diff = 0;
      
      for (let check in newFriend.scores) {
        let a = parseInt(friends[i].scores);
        let b = parseInt(newFriend.scores[check]);
        diff = Math.abs(a - b);
      };
      
      if (diff < total){
        total = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    };

    // Pushing newFriend object into the Friends API
    friends.push(newFriend);
  
    // Formating response as JSON
    res.json(newFriend);
  });

};