function firstNonRepeatingCharacterFinder(str) {
	const map = new Map();

	for (let i = 0; i < str.length - 1; i++) {
		map.set(str[i], (map.get(str[i]) || 0) + 1);
	}

	for (const [key, value] of map.entries()) {
		if (value === 1) return key;
	}

	return 'All are repeating.';
}

const str1 = 'hello';
const str2 = 'pprogramming';
const str3 = 'banana';
const str4 = 'world';
const str5 = 'ababab';

console.log('---------------------');
console.log(
	'Str1 ',
	str1,
	': First non repeating character : ',
	firstNonRepeatingCharacterFinder(str1),
);
console.log(
	'Str2 ',
	str2,
	': First non repeating character : ',
	firstNonRepeatingCharacterFinder(str2),
);
console.log(
	'Str3 ',
	str3,
	': First non repeating character : ',
	firstNonRepeatingCharacterFinder(str3),
);
console.log(
	'Str4 ',
	str4,
	': First non repeating character : ',
	firstNonRepeatingCharacterFinder(str4),
);
console.log(
	'Str5 ',
	str5,
	': First non repeating character : ',
	firstNonRepeatingCharacterFinder(str5),
);
