//Sets Up Server


//dependancies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//assigns PORT
var app = express();
var PORT = 3000;


app.use(express.static('app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// app.get('/', function(req, res){
//         res.sendFile(path.join(__dirname + '/app/public/home.html'));
//     });
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});




