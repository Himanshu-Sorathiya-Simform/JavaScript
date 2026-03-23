function isAnagram(str1, str2) {
	const normalize = (str) => str.trim().replaceAll(' ', '');

	return (
		normalize(str1).length === normalize(str2).length &&
		normalize(str1).toLowerCase().split('').sort().join('') ===
			normalize(str2).toLowerCase().split('').sort().join('')
	);
}

console.log('---------------------------------------------------------------');
console.log('Anagram Checking');

console.log('evil | vile | ', isAnagram('evil ', 'vile'));
console.log('dusty | study | ', isAnagram(' dusty', 'study'));
console.log('n i g h t | thing | ', isAnagram('n i g h t', 'thing'));

console.log('Dormitory | dirty room | ', isAnagram('Dormitory', 'dirty room'));
console.log(
	'Conversation | Voices rant on | ',
	isAnagram('Conversation', 'Voices rant on'),
);

console.log('A gentleman | Elegant man | ', isAnagram('A gentleman', 'Elegant man'));
console.log(
	'School master | The classroom | ',
	isAnagram('School master', 'The classroom'),
);

console.log('apple | pale | ', isAnagram('apple', 'pale'));
console.log('binary | brainy | ', isAnagram('binary', 'brainy'));

console.log('listen | silent | ', isAnagram('listen', 'silent'));
console.log('triangle | integral | ', isAnagram('triangle', 'integral'));

console.log('evil | vile | ', isAnagram('evil', 'vile'));
console.log('evil | vile (space) | ', isAnagram('evil ', 'vile'));
console.log('Evil | vile | ', isAnagram('Evil', 'vile'));

console.log(
	'conversation | voices rant on | ',
	isAnagram('conversation', 'voices rant on'),
);
console.log(
	'conversation | voices rant off | ',
	isAnagram('conversation', 'voices rant off'),
);

console.log('night | thing', isAnagram('night', 'thing'));
console.log('n i g h t | thing', isAnagram('n i g h t', 'thing'));

console.log('rat | car', isAnagram('rat', 'car'));
console.log('state | taste', isAnagram('state', 'taste'));
console.log('save | vase', isAnagram('save', 'vase'));
