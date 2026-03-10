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
