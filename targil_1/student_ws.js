var data = require('./data/data.json');


function myParser(){												//ws class
	
}

myParser.prototype.allStudents = function(){						//returns the entire students json object
	return data;
};

myParser.prototype.excellentStudents = function(){					//returns the students with an average above 85 as an array of objects	
	var abc = [];
	for(var name in data.students){
		if(average(data.students[name].grades) > 84){
			abc.push(data.students[name]);
		}
	}
	return abc;
};

myParser.prototype.olderExcellentGeo = function(_studid){			//returns the student with the id that the user chose
	for(var ids in data.students){
		if(data.students[ids].id == _studid)
			return data.students[ids];
	}
};

function average(_grades){											//calculates a student's average
	var sum = 0;
	for(var grade in _grades){
		sum += _grades[grade];
	}
	return sum / 3;
}


module.exports = function(){										//exports the parser ws
	var pars = new myParser();
	return pars;
}
