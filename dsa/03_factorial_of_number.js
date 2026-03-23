function factorialRecursive(num) {
	return num <= 1 ? BigInt(1) : BigInt(num) * BigInt(factorialRecursive(num - 1));
}

function factorialIterative(num) {
	let n = BigInt(num);
	let ans = BigInt(1);

	while (n > 0) {
		ans *= n--;
	}

	return ans;
}

console.log('---------------------------------------------------------------');
console.log('Factorial Iterative');
console.log('Factorial of 5 : ', factorialIterative(5));
console.log('Factorial of 1 : ', factorialIterative(1));
console.log('Factorial of 0 : ', factorialIterative(0));
console.log('Factorial of -5 : ', factorialIterative(-5));
console.log('Factorial of 11 : ', factorialIterative(11));
console.log('Factorial of 50 : ', factorialIterative(50));

console.log('---------------------------------------------------------------');
console.log('Factorial Recursive');
console.log('Factorial of 5 : ', factorialRecursive(5));
console.log('Factorial of 1 : ', factorialRecursive(1));
console.log('Factorial of 0 : ', factorialRecursive(0));
console.log('Factorial of -5 : ', factorialRecursive(-5));
console.log('Factorial of 11 : ', factorialRecursive(11));
console.log('Factorial of 50 : ', factorialRecursive(50));
