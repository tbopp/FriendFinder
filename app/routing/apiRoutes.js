// Route used to display a JSON of all possible friends
app.get('/api/friends', function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.post('/api/friends', function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});