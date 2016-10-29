var friends = require('../data/friends.js');
var path = require('path');



// ROUTING

module.exports = function(app){

	// API GET Requests when pages are visited

	app.get('/api/theList', function(req, res){
		res.json(friends);
	});

	// API POST Requests to server
	
	app.post('/api/theList', function(req, res){

		var lowestDiff = 50;
		var match;

		friends.forEach(function(data){
			var difference = 0;

			for(var i = 0; i < data.scores.length; i++){
				difference += Math.abs(data.scores[i] - req.body.scores[i]);
			} 

			if (difference < lowestDiff) {
				lowestDiff = difference;
				match = data;
			}
		});

	});

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
		res.json(chosenMatch);
		friends.push(req.body);


	};



