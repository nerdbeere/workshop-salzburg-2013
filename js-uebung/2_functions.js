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
