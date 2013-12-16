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

foo + bar; // Warum?

// Beispiel 4
var num = 2;
function beispiel4() {
	this.num = 4;
}
beispiel4();
console.log(num);

// Beispiel 5
var num = 2;
function Beispiel5() {
	this.num = 4;
}
new Beispiel5();
console.log(num);