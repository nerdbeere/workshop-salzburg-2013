var io = require('socket.io').listen(80);
io.sockets.on('connection', function (socket) 
	io.sockets.emit('this', {
		will: 'be received by everyone'
	});

	socket.on('private message', function (from, msg) {
		console.log(from, msg);
	});
});