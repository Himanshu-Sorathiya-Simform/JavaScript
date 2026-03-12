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

// Constants
console.log('Math.PI =', Math.PI); // 3.141592653589793
console.log('Math.E =', Math.E); // 2.718281828459045
console.log('Math.LN2 =', Math.LN2); // 0.6931471805599453
console.log('Math.SQRT2 =', Math.SQRT2); // 1.4142135623730951
console.log('Math.SQRT1_2 =', Math.SQRT1_2); // 0.7071067811865476

// Absolute value
console.log('Math.abs(-5) =', Math.abs(-5)); // 5

// Square root
console.log('Math.sqrt(16) =', Math.sqrt(16)); // 4

// Cube root
console.log('Math.cbrt(27) =', Math.cbrt(27)); // 3

// Power
console.log('Math.pow(2, 3) =', Math.pow(2, 3)); // 8

// Sign of a number
console.log('Math.sign(-5) =', Math.sign(-5)); // -1

// Random number (example output)
console.log('Math.random() =', Math.random()); // e.g., 0.234

// Max & Min
console.log('Math.max(2,5,1) =', Math.max(2, 5, 1)); // 5
console.log('Math.min(2,5,1) =', Math.min(2, 5, 1)); // 1

// Floor, Ceil, Round, Trunc
console.log('Math.floor(4.9) =', Math.floor(4.9)); // 4
console.log('Math.floor(-4.9) =', Math.floor(-4.9)); // -5

console.log('Math.ceil(4.1) =', Math.ceil(4.1)); // 5
console.log('Math.ceil(-4.1) =', Math.ceil(-4.1)); // -4

console.log('Math.round(4.4) =', Math.round(4.4)); // 4
console.log('Math.round(4.5) =', Math.round(4.5)); // 5
console.log('Math.round(-4.5) =', Math.round(-4.5)); // -4

console.log('Math.trunc(4.9) =', Math.trunc(4.9)); // 4
console.log('Math.trunc(-4.9) =', Math.trunc(-4.9)); // -4

// Rounding to 2 decimal places
let num = 4.56789;
let rounded = Math.round(num * 100) / 100;
console.log('Rounded num to 2 decimals =', rounded); // 4.57

// Creating BigInts
const big1 = 900719925474099123456789n;
console.log('big1 =', big1);
// Output: 900719925474099123456789n

const big2 = BigInt('900719925474099123456789');
console.log('big2 =', big2);
// Output: 900719925474099123456789n

// Basic Arithmetic
const a = 10000000000000000000n;
const b = 20000000000000000000n;

console.log('a + b =', a + b); // 30000000000000000000n
console.log('b - a =', b - a); // 10000000000000000000n
console.log('a * 2n =', a * 2n); // 20000000000000000000n
console.log('b / 2n =', b / 2n); // 10000000000000000000n
console.log('b % 3n =', b % 3n); // 2n

// Mixing BigInt and Number
let n = 10n;
let m = 5;
// console.log(n + m); // TypeError
console.log('n + BigInt(m) =', n + BigInt(m)); // 15n

// Comparison
console.log('10n > 5 =', 10n > 5); // true
console.log('10n === 10 =', 10n === 10); // false
console.log('10n == 10 =', 10n == 10); // true (loose equality)

// Limitations
// console.log(Math.sqrt(16n)); // TypeError

// Readable large numbers
let billion = 1_000_000_000;
console.log('billion =', billion); // 1000000000

let phoneNumber = 123_456_7890;
console.log('phoneNumber =', phoneNumber); // 1234567890

// Decimal numbers
let price = 12_345.67_89;
console.log('price =', price); // 12345.6789

// Binary, Octal, Hex with separators
let bin = 0b1010_1010;
console.log('bin =', bin); // 170

let oct = 0o12_345;
console.log('oct =', oct); // 5349

let hex = 0xab_cd_ef;
console.log('hex =', hex); // 11259375

// Numeric separator rules (examples that fail):
// let wrong1 = _1234;    // cannot start with _
// let wrong2 = 1234_;    // cannot end with _
// let wrong3 = 1._23;    // cannot be next to decimal
// let wrong4 = 0x_A;     // cannot be after 0x
// let wrong5 = 123n_456; // cannot be after n
