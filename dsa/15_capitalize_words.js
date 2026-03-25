function capitalize(str) {
	return str
		.trim()
		.toLowerCase()
		.replace(/\s+/g, ' ')
		.split(' ')
		.map((word) => word.replace(word[0], word[0].toUpperCase()))
		.join(' ');
}

console.log('---------------------------------------------------------------');
console.log('Capitalize Words');

console.log('hello world : ' + capitalize('hello world'));
console.log('this is javascript : ' + capitalize('this is javascript'));
console.log('convert THIS string : ' + capitalize('convert THIS string'));
console.log('mIxEd CaSe input string : ' + capitalize('mIxEd CaSe input string'));
console.log(
	'title case converter function : ' + capitalize('title case converter function'),
);
console.log(
	'leading and trailing spaces : ' + capitalize('  leading and trailing spaces  '),
);
console.log('multiple     spaces here : ' + capitalize('multiple     spaces here'));
console.log('one-word : ' + capitalize('one-word'));
console.log('ANOTHER example HERE : ' + capitalize('ANOTHER example HERE'));
console.log('javascript is fun : ' + capitalize('javascript is fun'));
console.log('make EVERY word title case : ' + capitalize('make EVERY word title case'));
console.log('edge CASE testing STRING : ' + capitalize('edge CASE testing STRING'));
console.log('clean code matters : ' + capitalize('clean code matters'));
console.log('test with numbers 123 abc : ' + capitalize('test with numbers 123 abc'));
console.log('special characters test! : ' + capitalize('special characters test!'));
