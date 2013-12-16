// Aufgabe 1 Lösung
var foobar = [function() {
	return 'foo';
}];

// Aufgabe 2 Lösung
function expect(value1) {
	return {
		toBe: function(value2) {
			return value1 === value2;
		}
	}
}