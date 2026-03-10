// AND &&
// Returns true only if both conditions are true.
let age = 20;
let hasID = true;
if (age >= 18 && hasID) {
	console.log('Can enter club');
}

// OR ||
// Returns true if at least one condition is true.
let isVIP = false;
let hasTicket = true;
if (isVIP || hasTicket) {
	console.log('Can enter event');
}

// NOT !
// Inverts the boolean value.
let isAdmin = false;
if (!isAdmin) {
	console.log('Access denied');
}
