function isPalindrome(str) {
	return str
		.toLowerCase()
		.trim()
		.split('')
		.every((word, index, og) => word === og.at(-index - 1));
}

console.log('---------------------------------------');
console.log('Palindrome');
console.log('Himanshu : ', isPalindrome('Himanshu'));
console.log('aba : ', isPalindrome('aba'));
console.log('abba : ', isPalindrome('abba'));
console.log('krish : ', isPalindrome('krish'));
console.log('kriirk : ', isPalindrome('kriirk'));
console.log('HimamiH : ', isPalindrome('HimamiH'));
