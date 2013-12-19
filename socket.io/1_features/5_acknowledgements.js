// server
var io = require('socket.io').listen(80);

io.sockets.on('connection', function (socket) {
	socket.on('ferret', function (name, fn) {
		fn('woot');
	});
});

// client
<script>
	var socket = io.connect('http://localhost');
	socket.on('connect', function () {
		socket.emit('ferret', 'tobi', function (data) {
			console.log(data); // data will be 'woot'
		});
	});
</script>