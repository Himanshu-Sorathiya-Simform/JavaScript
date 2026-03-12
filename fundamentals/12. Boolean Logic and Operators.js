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

// Short Circuit
// || OR
console.log(0 || '' || null || 'Hello' || 5); // Hello

let username = null;
let displayName = username || 'Guest';
console.log(displayName); // Guest

// && AND
console.log(0 || '' || null || 'Hello' || 5); // Hello

let isLoggedIn = true;
isLoggedIn && console.log('Welcome!');
// If `isLoggedIn` is `true` → code runs.
// If `false` → nothing happens.

// ??
let user = null;
let name = user ?? 'Guest';
console.log(name); // Guest

let username1 = 'John';
let displayName2 = username1 ?? 'Guest';
console.log(displayName2); // John

function greet(name) {
	let username1 = name ?? 'Guest';
	console.log('Hello ' + username1);
}
greet('John');
greet(null);

// ||=
let username2 = '';
username2 ||= 'Guest';
console.log(username2); // Guest

let score = 50;
score ||= 100;
console.log(score); // 50

// &&=
let isLoggedIn1 = true;
isLoggedIn1 &&= false;
console.log( isLoggedIn1 ); // false

let user1 = null;
user1 &&= "Admin";
console.log( user1 ); // null

// ??=
let age1 = null;
age1 ??= 18;
console.log( age1 ); // 18

let count = 0;
count ??= 10;
console.log(count); // 0
