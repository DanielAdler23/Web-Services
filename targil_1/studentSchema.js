var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studSchema = new Schema({
	id: {type: Number, index: 1},
	firstName: {type: String, requires: true},
	lastName: {type: String, requires: true},
	age: Number,
	grades: {math: Number, history: Number, geography: Number}
}, {collection: 'students'});

var Student = mongoose.model('Student', studSchema);

module.exports = Student;