// Was macht Array.pop?
var foo = [1, 2, 3];
foo.pop();

// Aufgabe 1
// Implementiere die folgende Funktion
foobar.pop()(); // should return 'foo'

// Aufgabe 1 Lösung
var foobar = [function() {
	return 'foo';
}];

// Aufgabe 2
// Implementiere die folgende Funktion
expect(true).toBe(false); // should return false
expect(true).toBe(true); // should return true

// Aufgabe 2 Lösung
function expect(value1) {
	return {
		toBe: function(value2) {
			return value1 === value2;
		}
	}
}