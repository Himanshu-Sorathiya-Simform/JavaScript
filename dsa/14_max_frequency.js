function maxFrequency(str) {
	const map = new Map();

	for (const character of str.replace(/\s+/g, '').toLowerCase()) {
		map.set(character, (map.get(character) || 0) + 1);
	}

	let ans = '',
		freq = 0;
	for (const [key, value] of map) {
		if (value > freq) {
			ans = key;
			freq = value;
		}
	}

	return `Character ${ans} appearing ${freq} times`;
}

console.log('---------------------------------------');
console.log('Max Frequency of a character');

console.log('Himanshu : ', maxFrequency('Himanshu'));
console.log('Himanshuuuu : ', maxFrequency('Himanshuuuu'));
console.log('HHiimanshu : ', maxFrequency('HHiimanshu'));
console.log('Himaanshu : ', maxFrequency('Himaanshu'));
