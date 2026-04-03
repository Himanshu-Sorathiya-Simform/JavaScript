function counter() {
	let count = 0;

	return function () {
		return ++count;
	};
}

console.log('-----------------');

const counter1 = counter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
