
// Dependencies
const path = require("path");

module.exports = (app) => {
    
    //  Route for the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // 'catch-all' for any other URL's
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};