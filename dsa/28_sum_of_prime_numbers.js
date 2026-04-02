function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}

	return true;
}

function sumOfPrimeNumbers(number) {
	const primes = [];

	if (number <= 0) return ['Please enter valid number'];

	if (number >= 1) primes.push(1);

	if (number >= 2) primes.push(2);

	for (let i = 3; i <= number; i++) {
		if (isPrime(i)) primes.push(i);
	}

	return [
		`Prime numbers till ${number} : ${primes}`,
		` -- Sum : ${primes.reduce((curr, ele) => curr + ele, 0)}`,
	];
}

console.log('-------------------------');
console.log('Number -5 : ', ...sumOfPrimeNumbers(-5));
console.log('Number 0 : ', ...sumOfPrimeNumbers(0));
console.log('Number 1 : ', ...sumOfPrimeNumbers(1));
console.log('Number 2 : ', ...sumOfPrimeNumbers(2));
console.log('Number 3 : ', ...sumOfPrimeNumbers(3));
console.log('Number 4 : ', ...sumOfPrimeNumbers(4));
console.log('Number 5 : ', ...sumOfPrimeNumbers(5));
console.log('Number 6 : ', ...sumOfPrimeNumbers(6));
console.log('Number 25 : ', ...sumOfPrimeNumbers(25));
console.log('Number 29 : ', ...sumOfPrimeNumbers(29));
