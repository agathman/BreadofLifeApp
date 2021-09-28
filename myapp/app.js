// Part 1 super basic express app
var express = require("express");
var app = express();

// one default route will simply send some text back
app.get('/', (req, res) => {
    res.send('Hello World, from CIS 4339');
});

//Part 2 add simple get route
//triggers the callback for the route /simple which simply returns a json formatted output 
//3 parameters: req - request body, res - response body 
app.get('/simple', (req, res) => {
    res.json(['Tony','Lisa','Michael','Ginger','Food']);
});


app.listen(3000, () => {
 console.log('Backend Server running on port 3000');
});