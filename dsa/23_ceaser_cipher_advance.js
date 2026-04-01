function encrypt(str, steps) {
	steps = steps % 26;
	let ans = '';

	for (const word of str) {
		let base = word.charCodeAt() >= 97 && word.charCodeAt() <= 119 ? 97 : 65;

		ans += String.fromCharCode(((word.charCodeAt() - base + steps) % 26) + base);
	}

	return ans;
}

function decrypt(str, steps) {
	steps = steps % 26;
	let ans = '';

	for (const word of str) {
		let base = word.charCodeAt() >= 97 && word.charCodeAt() <= 119 ? 97 : 65;

		ans += String.fromCharCode(((word.charCodeAt() - base - steps + 26) % 26) + base);
	}

	return ans;
}

console.log('---------------------------------------------------------------');
console.log('Caesar Cipher , Himanshu');

const encrypt1 = encrypt('Himanshu', 1);
const encrypt11 = encrypt('Himanshu', 11);
const encrypt100 = encrypt('Himanshu', 100);

console.log('1 Step : ');
console.log('Encryption : ', encrypt1);
console.log('Decryption : ', decrypt(encrypt1, 1));
console.log('-----');

console.log('11 Step : ');
console.log('Encryption : ', encrypt11);
console.log('Decryption : ', decrypt(encrypt11, 11));
console.log('-----');

console.log('100 Step : ');
console.log('Encryption : ', encrypt100);
console.log('Decryption : ', decrypt(encrypt100, 100));
console.log('-----');
