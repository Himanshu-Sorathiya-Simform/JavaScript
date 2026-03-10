// Loose Equality (==)
console.log(5 == '5'); // true
console.log(0 == false); // true
console.log(null == undefined); // true

// Strict Equality (===)
console.log(5 === '5'); // false (number !== string)
console.log(0 === false); // false (number !== boolean)
console.log(null === undefined); // false
console.log(5 === 5); // true
