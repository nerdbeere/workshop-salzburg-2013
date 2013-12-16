// Beispiel 1
var beispiel1 = function(bar) {
	return 'beispiel1';
};

// Beispiel 2
function beispiel2(bar) {
	return 'beispiel2';
}

// Beispiel 3
// Welche der vorherigen Beispiele kann ich folgendermaßen
// an die folgende Funktion übergeben?
function executeFunction(func) {
	return func();
}
executeFunction(beispiel1); // Was passiert?
executeFunction(beispiel2); // Was passiert?

// Beispiel 4
(function foo() {
	var foobar = 42;
})();

// Beispiel 5
sum(1, 2); // returns ?
function sum(val1, val2) {
	return val1 + val2;
}

// Beispiel 6
sum(1, 2); // returns ?
var sum = function(val1, val2) {
	return val1 + val2;
};

// Beispiel 7
function Guy() {
	this.isNinja = false;
	this.weapons = [];
}

function Ninja() {
	this.isNinja = true;
	this.weapons = [];
}

Ninja.prototype = Guy.prototype;

Guy.prototype.train = function() {
	this.isNinja = true;
};

Guy.prototype.addWeapon = function(weapon) {
	this.weapons.push(weapon);
	return this.weapons;
};

var julian = new Guy();
julian.train();

var bela = new Ninja();

bela.addWeapon('javascript');
julian.addWeapon('scala');

// Beispiel 8
;(function($, undefined) {
	"use strict";
	// your code here
})(jQuery);

