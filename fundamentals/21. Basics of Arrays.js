let fruits = ['Apple', 'Banana', 'Mango'];
let numbers = new Array(1, 2, 3);
console.log(fruits);

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

fruits[1] = 'Orange';

console.log(fruits.length); // 3

fruits.push('Peach');
console.log(fruits); // ['Apple', 'Orange', 'Mango', 'Peach']

fruits.pop();
console.log(fruits); // ['Apple', 'Orange', 'Mango']

fruits.unshift('Peach');
console.log(fruits); // ['Peach' ,'Apple', 'Orange', 'Mango']

fruits.shift();
console.log(fruits); // ['Apple', 'Orange', 'Mango']

console.log(fruits.includes('Orange')); // true
console.log(fruits.includes('Peach')); // false

console.log(fruits.indexOf('Orange')); // 1
console.log(fruits.indexOf('Peach')); // -1
