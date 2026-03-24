function countVowels(str) {
	return str
		.trim()
		.toLowerCase()
		.split('')
		.reduce((curr, character) => ('aeiou'.includes(character) ? curr + 1 : curr), 0);
}

console.log('---------------------------------------------------------------');
console.log('Count vowels');

console.log('Himanshu :', countVowels('Himanshu'));
console.log('Krish :', countVowels('Krish'));
console.log('jEnIth :', countVowels('jEnIth'));
console.log('VatSAL :', countVowels('VatSAL'));
console.log('MANTU :', countVowels('MANTU'));
console.log('krutarth :', countVowels('krutarth'));
console.log('satyam :', countVowels('satyam'));
console.log('kUshAl :', countVowels('kUshAl'));
