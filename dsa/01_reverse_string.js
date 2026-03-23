function reverseStringManual(str) {
	let arr = str.split('');
	let ans = '';

	for (let i = 0; i < arr.length; i++) {
		ans = str[i] + ans;
	}

	return ans;
}

function reverseStringInBuilt(str) {
	return str.split('').reverse().join('');
}

console.log('---------------------------------------');
console.log('Reverse Manual');
console.log('Himanshu : ', reverseStringManual('Himanshu'));
console.log('aba : ', reverseStringManual('aba'));
console.log('abba : ', reverseStringManual('abba'));
console.log('krish : ', reverseStringManual('krish'));
console.log('kriirk : ', reverseStringManual('kriirk'));
console.log('HimamiH : ', reverseStringManual('HimamiH'));

console.log('---------------------------------------');
console.log('Reverse In Built');
console.log('Himanshu : ', reverseStringInBuilt('Himanshu'));
console.log('aba : ', reverseStringInBuilt('aba'));
console.log('abba : ', reverseStringInBuilt('abba'));
console.log('krish : ', reverseStringInBuilt('krish'));
console.log('kriirk : ', reverseStringInBuilt('kriirk'));
console.log('HimamiH : ', reverseStringInBuilt('HimamiH'));
