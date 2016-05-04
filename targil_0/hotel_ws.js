var events = require('events');
var util = require('util');
util.inherits(Hotel, events.EventEmitter);


function Hotel(_name, _type){
	this.name = _name;
	this.type = _type;
	this.likes = 0;
	events.EventEmitter.call(this);
}

Hotel.prototype.showLikes = function(){
	this.emit('likesChanged');
};

Hotel.prototype.plusLike = function(){
	this.likes += 1;
	this.emit('likesChanged');
};

Hotel.prototype.minusLike = function(){
	if(this.likes == 0){
		this.emit('zero');
		return;
	}
	this.likes -= 1;
	this.emit('likesChanged');
};

var displayTotal = function(){
	console.log("The " + this.name + " " + this.type + " Has " + this.likes + " likes");
}

var checkSum = function(){
	console.log("Likes can't go below 0");
}


module.exports = function(_name, _type){
	var hot = new Hotel(_name, _type);
	hot.on("likesChanged", displayTotal);
	hot.on("zero", checkSum);
	return hot;
}