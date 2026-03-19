function isPalindrome(str) {
	let left = 0,
		right = str.length - 1;

	while (left < right) {
		if (str[left] != str[right]) return false;

		left++;
		right--;
	}

	return true;
}

console.log('---------------------------------------');
console.log('Palindrome')
console.log('Himanshu : ', isPalindrome('Himanshu'));
console.log('aba : ', isPalindrome('aba'));
console.log('abba : ', isPalindrome('abba'));
console.log('krish : ', isPalindrome('krish'));
console.log('kriirk : ', isPalindrome('kriirk'));
console.log('HimamiH : ', isPalindrome('HimamiH'));
