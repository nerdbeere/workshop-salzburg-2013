// server
var io = require('socket.io').listen(80);

var news = io.of('/news').on('connection', function (socket) {
	socket.emit('item', { news: 'item' });
});
  
// client
<script>
	var news = io.connect('http://localhost/news');
	news.on('news', function () {
		news.emit('woot');
	});
</script>