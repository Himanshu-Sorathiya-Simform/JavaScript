function convertToCamelCase(str) {
	return str
		.trim()
		.toLowerCase()
		.replace(/\s+/g, ' ')
		.split(' ')
		.map((word, index) =>
			index === 0 ?
				word.replace(word[0], word[0].toLowerCase())
			:	word.replace(word[0], word[0].toUpperCase()),
		)
		.join(' ')
		.replace(/\s+/g, '');
}

console.log('---------------------------------------------------------------');
console.log('Camel Case Conversion');

console.log('hello world : ' + convertToCamelCase('hello world'));
console.log('this is javascript : ' + convertToCamelCase('this is javascript'));
console.log('convert THIS string : ' + convertToCamelCase('convert THIS string'));
console.log('mIxEd CaSe input string : ' + convertToCamelCase('mIxEd CaSe input string'));
console.log(
	'camel case converter function : ' +
		convertToCamelCase('camel case converter function'),
);
console.log(
	'leading and trailing spaces : ' +
		convertToCamelCase('  leading and trailing spaces  '),
);
console.log(
	'multiple     spaces here : ' + convertToCamelCase('multiple     spaces here'),
);
console.log('one-word : ' + convertToCamelCase('one-word'));
console.log('ANOTHER example HERE : ' + convertToCamelCase('ANOTHER example HERE'));
console.log('javascript is fun : ' + convertToCamelCase('javascript is fun'));
console.log(
	'make EVERY word camel case : ' + convertToCamelCase('make EVERY word camel case'),
);
console.log(
	'edge CASE testing STRING : ' + convertToCamelCase('edge CASE testing STRING'),
);
console.log('clean code matters : ' + convertToCamelCase('clean code matters'));
console.log(
	'test with numbers 123 abc : ' + convertToCamelCase('test with numbers 123 abc'),
);
console.log(
	'special characters test! : ' + convertToCamelCase('special characters test!'),
);
