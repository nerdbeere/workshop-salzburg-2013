// chat application
;(function($, io, undefined) {
	"use strict";
	
	// socket connection
	var socket = io.connect('http://127.0.0.1:1337');
	
	// dom elements
	var $messages = $('.messages > ul');
	var $users = $('.users');
	var $input = $('.input > input');
	
	// models
	var Room = function() {
		// this function will render all given lines
		// and replaces them with the current content
		this.renderLines = function(lines) {
			// create a new element
			var $lines = $('<div />');
			// iterate over all lines and create the $line element
			lines.forEach(function(line) {
				// add line to $lines
				$lines.append(_getLine(line.user.name, line.text));
			});
	
			// replace the content
			$messages.html($lines.html());
		};
	
		// render a single line
		this.renderLine = function(line) {
			$messages.append(_getLine(line.user.name, line.text));
		};
	
		// send a message to the server
		this.send = function(text) {
			socket.emit('message', text);
		};
	
		// private function for line rendering
		function _getLine(username, text) {
			var $line = $('<li><span class="username"></span><span class="text"></span></li>');
			$line.find('.username').text(username);
			$line.find('.text').text(text);
			return $line;
		}
	};
	
	// kickoff
	
	// create a new room
	var lobby = new Room();
	
	// listen for backlog from the server
	socket.on('backlog', function(lines) {
		lobby.renderLines(lines);
	});
	
	// listen for single messages
	socket.on('message', function(line) {
		lobby.renderLine(line);
	});
	
	// check if the user wants to send a new message
	$('body .input > input').on('keypress', function(e) {
		// 13 === Enter Key
		if(e.which !== 13) return true;
		// send message
		lobby.send($(this).val());
		// clear the input field
		$(this).val('');
	});
	
})(jQuery, io);