const friends = require("../data/friends.js");

module.exports = {
    
    // Object used to display a JSON of all possible friends
    getFriends : function(req, res) {
        app.get('/api/friends', function(req, res) {
            res.json(friends);
        });
    },
    
    // Object used to raoute incoming survey results.
    postFriends : function(req, res) {
        app.post('/api/friends', function(req, res) {
            res.sendFile(path.join(__dirname, "home.html"));
            return res.json(characters)
        });
    }
};
