var mongoose = require('mongoose');
mongoose.connect('mongodb://db_usr:db_pass@ds039165.mlab.com:39165/students_db');
var Student = require('./studentSchema');
var conn = mongoose.connection;
var data;

conn.on('error', function(err){
	console.log('connection error' + err);
});

conn.once('open', function(){
	console.log('connected');
	Student.find({}, {'_id':0}, function(err, stud){
		if(err) throw err;
		data = stud;
		mongoose.disconnect();
	});
});


function myParser(){												//ws class
	
}

myParser.prototype.allStudents = function(){						//returns the entire students json object
	return data;

};

myParser.prototype.excellentStudents = function(){					//returns the students with an average above 85 as an array of objects	
	var abc = [];
	for(var name in data){
		if(average(data[name].grades) > 84){
			//console.log(data[name]);
			abc.push(data[name]);
		}
	}
	return abc;
};

myParser.prototype.olderExcellentGeo = function(_studid){			//returns the student with the id that the user chose
	for(var ids in data){
		if(data[ids].id == _studid)
			return data[ids];
	}
};

function average(_grades){										//calculates a student's average
	var sum = 0;
	sum += _grades.math;
	sum += _grades.history;
	sum += _grades.geography;
	return sum / 3;
}


module.exports = function(){										//exports the parser ws
	var pars = new myParser();
	return pars;
}
