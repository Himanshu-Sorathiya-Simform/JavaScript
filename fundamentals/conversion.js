function reverse(str) {
	let ans = '';

	for (let i = str.length; i > 0; --i) {
		ans += str[i - 1];
	}

	return ans;
}

function mappedValue(n, base) {
	let map = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
	];

	return map[n % base];
}

function conversion(n, base) {
	if (n < 0) console.log('sorry, i dont know answer for this yet');

	let answer = '';

	while (n != 0) {
		answer += mappedValue(n, base);

		n = Math.trunc(n / base);
	}

	answer = reverse(answer);

	return answer;
}

console.log('Binary');
console.log(conversion(4, 2));
console.log(conversion(1, 2));
console.log(conversion(0, 2));
console.log(conversion(11, 2));

console.log('Octal');
console.log(conversion(4, 8));
console.log(conversion(11, 8));
console.log(conversion(15, 8));
console.log(conversion(25, 8));

console.log('HexaDecimal');
console.log(conversion(4, 16));
console.log(conversion(15, 16));
console.log(conversion(21, 16));
console.log(conversion(28, 16));
