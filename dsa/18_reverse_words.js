function reverseWords( str ) {
    return str.split(' ').reverse().join(' ')
}

console.log('---------------------------------------------------------------');
console.log('Reverse Words');


console.log('hello world : ' + reverseWords('hello world'));
console.log('this is javascript : ' + reverseWords('this is javascript'));
console.log('convert THIS string : ' + reverseWords('convert THIS string'));
console.log('mIxEd CaSe input string : ' + reverseWords('mIxEd CaSe input string'));
console.log(
	'title case converter function : ' +
		reverseWords('title case converter function'),
);
console.log(
	'leading and trailing spaces : ' +
		reverseWords('  leading and trailing spaces  '),
);
console.log(
	'multiple     spaces here : ' + reverseWords('multiple     spaces here'),
);
console.log('one-word : ' + reverseWords('one-word'));
console.log('ANOTHER example HERE : ' + reverseWords('ANOTHER example HERE'));
console.log('javascript is fun : ' + reverseWords('javascript is fun'));
console.log(
	'make EVERY word title case : ' + reverseWords('make EVERY word title case'),
);
console.log(
	'edge CASE testing STRING : ' + reverseWords('edge CASE testing STRING'),
);
console.log('clean code matters : ' + reverseWords('clean code matters'));
console.log(
	'test with numbers 123 abc : ' + reverseWords('test with numbers 123 abc'),
);
console.log(
	'special characters test! : ' + reverseWords('special characters test!'),
);
