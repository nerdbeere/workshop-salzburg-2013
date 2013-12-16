// node.js
var io = require('socket.io').listen(1337);

io.sockets.on('connection', function (socket) {
  // client connected
  // wait 5s then send something to the client
  setTimeout(function() {
	  socket.emit('news', 'I got great news for you, dude!')
  }, 5000);
});