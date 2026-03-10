// Using Number
console.log(Number('123')); // 123
console.log(Number('123abc')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Unary + Operator;
console.log(+'123'); // 123
console.log(+'abc'); // NaN
console.log(+true); // 1
console.log(+false); // 0

// parseInt() and parseFloat()
console.log(parseInt('100px')); // 100
console.log(parseInt('12.5')); // 12
console.log(parseFloat('12.5px')); // 12.5
console.log(parseInt('abc')); // NaN

// toString() — converting number to string
let x = 123;
console.log(x.toString()); // "123"
console.log((123).toString()); // "123"

// isNan()
console.log(isNaN(123)); // false
console.log(isNaN('abc')); // true
console.log(isNaN('123')); // false (converted to number first)

// isFinite
console.log(isFinite(10)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite('10')); // true (string converted)
console.log(Number.isFinite('10')); // false (strict)

// isInteger
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isInteger('10')); // false

// typeof
console.log(typeof 10); // "number"
console.log(typeof 10.5); // "number"
console.log(typeof '10'); // "string"
