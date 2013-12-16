var io = require('socket.io').listen(1337),
	User = require('./models/User'),
	Room = require('./models/Room');

// Create a new room
var lobby = new Room();
var userCount = 0;

// listen for new connections
io.sockets.on('connection', function (socket) {
	
	// user connected so we create a new user
	var user = new User(socket, 'user #' + (++userCount));
	
	// let the user join the lobby
	lobby.join(user);
	
	// listen for new messages
	user.socket.on('message', function(data) {
		// add the incoming message 
		lobby.addLine(data, user);
	});
});