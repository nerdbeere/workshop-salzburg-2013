var io = require('socket.io').listen(80);

io.sockets.on('connection', function (socket) {
	var tweets = setInterval(function () {
		getBieberTweet(function (tweet) {
			socket.volatile.emit('bieber tweet', tweet);
		});
	}, 100);
	
	socket.on('disconnect', function () {
		clearInterval(tweets);
	});
});