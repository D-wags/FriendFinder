var friends = require('../data/friends.js');
var path = require('path');



// ROUTING

module.exports = function(app){

	// API GET Requests when pages are visited
	console.log("a");
	app.get('/api/theList', function(req, res){
		console.log("b");
		res.json(friends);
		console.log("c");
	});

	// API POST Requests to server
	
	app.post('/api/theList', function(req, res){

		var lowestDiff = 50;
		var match;
		console.log("d");
		friends.forEach(function(data){
			var difference = 0;
			console.log("e");
			for (var i = 0; i < data.scores.length; i++){
				difference += Math.abs(data.scores[i] - req.body.scores[i]);
			} 

			if (difference < lowestDiff) {
				lowestDiff = difference;
				match = data;
			}
		});

		res.json(match);
		friends.push(req.body);

	});

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
		


	};



