function encrypt(str, steps) {
	steps = steps % 26;
	let ans = '';

	for (const word of str) {
		let base = word.charCodeAt() >= 97 && word.charCodeAt() <= 119 ? 97 : 65;

		ans += String.fromCharCode(((word.charCodeAt() - base + steps) % 26) + base);
	}

	return ans;
}

console.log('---------------------------------------------------------------');
console.log('Caesar Cipher');

console.log('Steps : 1', encrypt('Himanshu', 1));
console.log('Steps : 3', encrypt('Himanshu', 3));
console.log('Steps : 5', encrypt('Himanshu', 5));
console.log('Steps : 11', encrypt('Himanshu', 11));
console.log('Steps : 100', encrypt('Himanshu', 27));
