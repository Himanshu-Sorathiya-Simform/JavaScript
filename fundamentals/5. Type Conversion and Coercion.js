// Type Conversion (Explicit)
// Number → String
let num=123;
let str=String(num);
console.log(str, typeof str); // "123" string

// String → Number
let strNum="456";
let n=Number(strNum);
console.log(n, typeof n); // 456 number

// Boolean → Number
console.log(Number(true)); // 1
console.log( Number( false ) ); // 0

// Type Coercion (Implicit)
// Number + String → string (concatenation)
console.log(10 + "5"); // "105"

// String - Number → number (conversion)
console.log("10" - 2); // 8
