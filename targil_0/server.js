var http = require('http');
var hotel = require('./hotel_ws.js');


http.createServer(function(req, res){
	res.writeHeader(200, {'Content-Type': 'text/plain'});
	res.end('Welcome to the hotel web service\n');
}).listen(8080, '127.0.0.1');

console.log("Server running at http://127.0.0.1:8080/");

var hotel1 = hotel("Venetian", "Hotel");
var hotel2 = hotel("Bellagio", "Spa");

hotel1.plusLike();
hotel1.plusLike();
hotel2.plusLike();
hotel2.plusLike();
hotel1.minusLike();
hotel1.minusLike();
hotel1.minusLike();
hotel1.showLikes();
hotel2.showLikes();