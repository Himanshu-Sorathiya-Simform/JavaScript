function convertToTitleCase(str) {
	return str
		.trim()
		.toLowerCase()
		.replace(/\s+/g, ' ')
		.split(' ')
		.map((word) => word.replace(word[0], word[0].toUpperCase()))
		.join(' ');
}

console.log('---------------------------------------------------------------');
console.log('Title Case Conversion');

console.log('hello world : ' + convertToTitleCase('hello world'));
console.log('this is javascript : ' + convertToTitleCase('this is javascript'));
console.log('convert THIS string : ' + convertToTitleCase('convert THIS string'));
console.log('mIxEd CaSe input string : ' + convertToTitleCase('mIxEd CaSe input string'));
console.log(
	'title case converter function : ' +
		convertToTitleCase('title case converter function'),
);
console.log(
	'leading and trailing spaces : ' +
		convertToTitleCase('  leading and trailing spaces  '),
);
console.log(
	'multiple     spaces here : ' + convertToTitleCase('multiple     spaces here'),
);
console.log('one-word : ' + convertToTitleCase('one-word'));
console.log('ANOTHER example HERE : ' + convertToTitleCase('ANOTHER example HERE'));
console.log('javascript is fun : ' + convertToTitleCase('javascript is fun'));
console.log(
	'make EVERY word title case : ' + convertToTitleCase('make EVERY word title case'),
);
console.log(
	'edge CASE testing STRING : ' + convertToTitleCase('edge CASE testing STRING'),
);
console.log('clean code matters : ' + convertToTitleCase('clean code matters'));
console.log(
	'test with numbers 123 abc : ' + convertToTitleCase('test with numbers 123 abc'),
);
console.log(
	'special characters test! : ' + convertToTitleCase('special characters test!'),
);
