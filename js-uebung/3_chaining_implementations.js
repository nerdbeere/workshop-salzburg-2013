// Was macht Array.pop?
var foo = [1, 2, 3];
foo.pop(); // löscht den letzten eintrag aus dem array und gibt den wert zurück

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