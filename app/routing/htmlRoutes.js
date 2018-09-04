
// Routes - Two specific routings, one for the survey page and another for a 'catch-all', for re-direct all other unrecognizable routes back to the home page.

// Route to display the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});
  
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});