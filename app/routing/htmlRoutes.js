// Array of avaialble routes to be used in logic below

// Routes - Two specific routings, one 'catch-all' for all other unrecognizable routes. This works because of procedural 

// Route to display the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});
  
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });