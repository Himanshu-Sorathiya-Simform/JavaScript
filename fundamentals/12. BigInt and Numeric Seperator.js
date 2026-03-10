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
console.log("billion =", billion); // 1000000000

let phoneNumber = 123_456_7890;
console.log("phoneNumber =", phoneNumber); // 1234567890

// Decimal numbers
let price = 12_345.67_89;
console.log("price =", price); // 12345.6789

// Binary, Octal, Hex with separators
let bin = 0b1010_1010;
console.log("bin =", bin); // 170

let oct = 0o12_345;
console.log("oct =", oct); // 5349

let hex = 0xAB_CD_EF;
console.log("hex =", hex); // 11259375

// Numeric separator rules (examples that fail):
// let wrong1 = _1234;    // cannot start with _
// let wrong2 = 1234_;    // cannot end with _
// let wrong3 = 1._23;    // cannot be next to decimal
// let wrong4 = 0x_A;     // cannot be after 0x
// let wrong5 = 123n_456; // cannot be after n
