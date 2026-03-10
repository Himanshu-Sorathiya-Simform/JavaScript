// uncomment this after checking console, and one by one check errors by commenting previous block
// "use strict";

//
x = 10;
console.log(x); // Result => 10

//
let y = 10;
delete y; // fails silently

//
function sum(a, a) {
	return a + a;
}

//
function show() {
	console.log(this); // window (browser)
}

show();

//
let public = 10; // Error

// Reserved keywords include:
// implements
// interface
// package
// private
// protected
// public
// static
// yield
