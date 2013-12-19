// Beispiel 1
var obj = new Object();
obj.foo = 42;
obj instanceof Object; // ?

// Beispiel 2
var obj = { foo: 42 };
obj instanceof Object; // ?

// Beispiel 3
var obj = function() {};
obj instanceof Object; // ?
obj instanceof Function; // ?

// Beispiel 4
var arr = [1, 2, 3];
arr instanceof Object; // ?
arr instanceof Array; // ?

// Beispiel 5
Object.prototype.isPrototypeOf(Array); // ?

// Beispiel 6
Array.prototype.isPrototypeOf(Object); // ?

// Beispiel 7
var str = 'test';
String.prototype.isPrototypeOf(str); // ?

// Beispiel 8
var str = new String('test');
String.prototype.isPrototypeOf(str); // ?

// Beispiel 9
function Guy() {
	this.addLanguages = function(lang) {
		this.languages.push(lang);
	}
}

Guy.prototype.languages = [];

new Guy().addLanguages('java');
new Guy().addLanguages('scala');

var awesomeGuy = new Guy();
console.log(awesomeGuy.languages);

// Beispiel 10
function Guy() {
	this.addLanguages = function(lang) {
		this.languages.push(lang);
	}
	this.languages = [];
}

new Guy().addLanguages('java');
new Guy().addLanguages('scala');

var awesomeGuy = new Guy();
console.log(awesomeGuy.languages);

// Beispiel 11
Number.prototype.isTen = function() {
	console.log(+this.toString() === 10);
}