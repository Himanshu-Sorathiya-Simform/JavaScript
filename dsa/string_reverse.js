function reverseString(str) {
	let arr = str.split('');
	let ans = '';

	for (let i = 0; i < arr.length / 2; i++) {
		ans = str[i] + ans;

		let temp = arr.at(i);
		arr[i] = arr.at(-i - 1);
		arr[arr.length - i - 1] = temp;
	}

	// return arr.join('');
	return ans;
}

console.log('---------------------------------------');
console.log('Reverse');
console.log('Himanshu : ', reverseString('Himanshu'));
console.log('aba : ', reverseString('aba'));
console.log('abba : ', reverseString('abba'));
console.log('krish : ', reverseString('krish'));
console.log('kriirk : ', reverseString('kriirk'));
console.log('HimamiH : ', reverseString('HimamiH'));
