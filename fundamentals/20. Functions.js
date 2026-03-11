// Function Declaration
function multiply1(a, b) {
	return a * b;
}
console.log(multiply1(4, 5)); // 20

function add1(a, b) {
	return a + b;
}
let result = add1(5, 3);
console.log(result); // 8

// Function Expression
const greet = function () {
	console.log('Hello');
};
greet();

const multiply2 = function (a, b) {
	return a * b;
};
console.log(multiply2(4, 5)); // 20

// Arrow Function
const add2 = (a, b) => {
	return a + b;
};
console.log(add2(4, 5)); // 9

const multiply3 = (a, b) => a * b;
console.log(multiply3(4, 5)); // 20

// Function Calling another Function
function greet() {
	console.log('Hello');
}
function start() {
	greet();
}
start(); // Hello

function getPrice() {
	return 100;
}
function calculateTax(price) {
	return price * 0.1;
}
function totalPrice() {
	let price = getPrice();
	let tax = calculateTax(price);
	return price + tax;
}
console.log(totalPrice()); // 110

// Default Parameters
function greet(name = 'Guest') {
	console.log('Hello ' + name);
}
greet('Himanshu'); // "Hello Himanshu"
greet(); // "Hello Guest"

function add(a = 0, b = 0) {
	return a + b;
}

console.log(add(5, 3)); // 8
console.log(add(5)); // 5
console.log(add()); // 0
