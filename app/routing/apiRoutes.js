
// const friends = require("../data/friends");

// module.exports = {
    
//     // Object used to display a JSON of all possible friends
//     getFriends : function(req, res) {
//             res.json(friends);
//             console.log(friends);
//         },

//     // Object used to post incoming survey results by creating a new friend object - takes in JSON input. Pushes to 'friends' array.
//     postFriends : function(req, res) {
//         // Create New Friends - takes in JSON input
//         // req.body hosts is equal to the JSON post sent from the user
//         // This works because of our body-parser middleware
//         const newFriend = req.body;
  
//         // Using a RegEx Pattern to remove spaces from newCharacter
//         // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//         newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        
//         // Testing to see how RegEx Pattern made an impact
//         console.log(newFriend);
        
//         // Pushing new friend object into Friends array
//         friends.push(newFriend);
  
//         res.json(newFriend);
//     }
// };