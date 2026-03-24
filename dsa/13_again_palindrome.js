function isPalindrome(str) {
	return str
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+/g, '')
		.split('')
		.every((word, index, og) => word === og.at(-index - 1));
}

console.log('---------------------------------------');
console.log('Palindrome');
// // console.log('Himanshu : ', isPalindrome('Himanshu'));
// // console.log('    aba : ', isPalindrome('       aba'));
// // console.log('abba\n\n\n : ', isPalindrome('abba\n\n\n'));
// // console.log('   krish    : ', isPalindrome('   krish   '));
// // console.log('k1 r i i r 1k : ', isPalindrome('k1 r i i r 1k'));
console.log(
	'\n\n\nH  5 i   m   a   m  i   5H   \n    : ',
	isPalindrome('\n\n\nH  5 i   m   a   m   i5   H   \n   '),
);
