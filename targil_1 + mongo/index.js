'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var func = require('./student_ws.js');

var app = express();
var myParser = func();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', function(req, res){
	req.next();
});

app.get('/api', function(req, res){											//route to api page
	console.log("Welcome to the api");
	res.sendFile(__dirname+ '/index.html');
});

app.get('/assets/css/main.css', function(req, res){
	res.sendFile(__dirname + '/assets/css/main.css');
});

app.get('/allstudents', function(req, res){									//route to get the students info
	console.log("Showing all students info");
	res.json(myParser.allStudents());
});


app.get('/getAllExcellent', function(req, res){								//route to get the students that have an average above 85
	console.log("Showing all students with an average of 85 and above");
	res.json(myParser.excellentStudents());
});



app.param('studid', function(req, res, next, value){						
	console.log("\nRequest received with studid: " + value);
	next();
});

app.get('/getStudInfo/:studid', function(req, res){							//route to get a specific student's info 
	var info = 'Showing results for ID: ' + req.params.studid;
	console.log(info);
	res.json(myParser.olderExcellentGeo(req.params.studid));
});




app.listen(process.env.PORT || 3000, function(err){
	if(err)
		console.log(err)
	else
		console.log("Listening on port 3000");
});