function greet(name, callback) {
	console.log('Hello ' + name);
	callback();
}
function sayBye() {
	console.log('Goodbye');
}
greet('Himanshu', sayBye);
greet('Himanshu', function () {
	console.log('Welcome!');
});

let numbers = [1, 2, 3];
numbers.forEach(function (num) {
	console.log(num);
});

console.log('Start');
setTimeout(function () {
	console.log('Executed after 2 seconds');
}, 2000);
console.log('End');

function processUser(name, callback) {
	callback(name);
}
processUser('Himanshu', function (user) {
	console.log('User:', user);
});
