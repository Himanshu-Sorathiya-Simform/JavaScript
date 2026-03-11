// ||=
let username = '';
username ||= 'Guest';
console.log(username); // Guest

let score = 50;
score ||= 100;
console.log(score); // 50

// &&=
let isLoggedIn = true;
isLoggedIn &&= false;
console.log( isLoggedIn ); // false

let user = null;
user &&= "Admin";
console.log( user ); // null

// ??=
let age = null;
age ??= 18;
console.log( age ); // 18

let count = 0;
count ??= 10;
console.log(count); // 0
