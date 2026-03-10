// ??
let user = null;
let name = user ?? 'Guest';
console.log(name); // Guest

let username = 'John';
let displayName = username ?? 'Guest';
console.log(displayName); // John

function greet(name) {
	let username = name ?? 'Guest';
	console.log('Hello ' + username);
}
greet('John');
greet(null);
