function fibonacciIterative(num) {
	if (num < 0) return 'Enter valid num';

	let ans = [0, 1];

	for (let i = 2; i < num; i++) {
		ans.push(ans[i - 1] + ans[i - 2]);
	}

	return ans.join(' ');
}

console.log('---------------------------------------------------------------');
console.log('Fibonacci Iterative');
console.log('5 Items : ', fibonacciIterative(5));
console.log('8 Items : ', fibonacciIterative(8));
console.log('11 Items : ', fibonacciIterative(11));
console.log('15 Items : ', fibonacciIterative(15));

console.log('---------------------------------------------------------------');
console.log('Fibonacci Recursive');
// console.log('5 Items : ', fibonacciRecursive(5));
// console.log('8 Items : ', fibonacciRecursive(8));
// console.log('11 Items : ', fibonacciRecursive(11));
// console.log('15 Items : ', fibonacciRecursive(15));
