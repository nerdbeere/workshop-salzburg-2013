// Beispiel 1
var foo = 42;
function doSomething() {
	return foo;
}
doSomething(); // returns ?

// Beispiel 2
function test() {
	var foo = 1;
}
function test2() {
	var bar = 2;
}

test();
test2();

foo + bar; // ?

// Beispiel 3
function test() {
	foo = 1;
}
function test2() {
	bar = 2;
}

test();
test2();

foo + bar; // ?

// Aufgabe Scoping
// Implementiere die folgende Funktion
sum(21)(2); // should return 23
sum(11)(31); // should return 42

// Aufgabe
function sum(value1) {
	return function(value2) {
		return value1 + value2;
	}
}