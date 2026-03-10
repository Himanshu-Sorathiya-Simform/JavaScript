// || OR
console.log( 0 || "" || null || "Hello" || 5 ); // Hello

let username = null;
let displayName = username || "Guest";
console.log( displayName ); // Guest

// && AND
console.log(0 || "" || null || "Hello" || 5); // Hello

let isLoggedIn = true;
isLoggedIn && console.log("Welcome!");
// If `isLoggedIn` is `true` → code runs.
// If `false` → nothing happens.
