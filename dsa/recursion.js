// let arr = [10, 20, 30, 40, 50, 60];

// function headRecursion(arr) {
// 	if (arr.length === 0) return;

// 	headRecursion(arr.slice(1));

// 	console.log(arr[0]);
// }

// function tailRecursion(arr) {
// 	if (arr.length === 0) return;

// 	console.log(arr[0]);

// 	tailRecursion(arr.slice(1));
// }

// tailRecursion(arr);
// console.log('---------------------');
// headRecursion(arr);

let arr = [28, -10, 5, 15, 41, 5, -11, -5, 5, 7];
console.log(arr);
console.log('---------------------------------------------------------------');

function maximumFromArrayIterative(arr) {
	let maximum = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		maximum = Math.max(arr[i], maximum);
	}

	return maximum;
}

function maximumFromArrayRecursive(arr, index = 0, maximum = Number.MIN_SAFE_INTEGER) {
	if (index === arr.length) return maximum;

	return maximumFromArrayRecursive(arr, index + 1, Math.max(arr[index], maximum));
}

console.log('Maximum from Array Iterative : ', maximumFromArrayIterative([...arr]));
console.log('Maximum from Array Recursive : ', maximumFromArrayRecursive([...arr]));

console.log('---------------------------------------------------------------');

function minimumFromArrayIterative(arr) {
	let minimum = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		minimum = Math.min(arr[i], minimum);
	}

	return minimum;
}

function minimumFromArrayRecursive(arr, index = 0, minimum = Number.MAX_SAFE_INTEGER) {
	if (index === arr.length) return minimum;

	return minimumFromArrayRecursive(arr, index + 1, Math.min(arr[index], minimum));
}

console.log('Minimum from Array Iterative : ', minimumFromArrayIterative([...arr]));
console.log('Minimum from Array Recursive : ', minimumFromArrayRecursive([...arr]));

console.log('---------------------------------------------------------------');

function firstOccurrenceOfElementIterative(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (target === arr[i]) return i;
	}

	return -1;
}

function firstOccurrenceOfElementRecursive(arr, target, index = 0) {
	if (index === arr.length) return -1;

	if (arr[index] === target) return index;

	return firstOccurrenceOfElementRecursive(arr, target, index + 1);
}

console.log(
	'First Occurrence of 5 Iterative : ',
	firstOccurrenceOfElementIterative([...arr], 5),
);
console.log(
	'First Occurrence of 5 Recursive : ',
	firstOccurrenceOfElementRecursive([...arr], 5),
);
console.log(
	'First Occurrence of 25 Iterative : ',
	firstOccurrenceOfElementIterative([...arr], 25),
);
console.log(
	'First Occurrence of 25 Recursive : ',
	firstOccurrenceOfElementRecursive([...arr], 25),
);

console.log('---------------------------------------------------------------');

function lastOccurrenceOfElementIterative(arr, target) {
	for (let i = arr.length; i > 0; i--) {
		if (target === arr[i - 1]) return i - 1;
	}

	return -1;
}

function lastOccurrenceOfElementRecursive(arr, target, index = arr.length) {
	if (index === 0) return -1;

	if (arr[index] === target) return index;

	return lastOccurrenceOfElementRecursive(arr, target, index - 1);
}

console.log(
	'Last Occurrence of 5 Iterative : ',
	lastOccurrenceOfElementIterative([...arr], 5),
);
console.log(
	'Last Occurrence of 5 Recursive : ',
	lastOccurrenceOfElementRecursive([...arr], 5),
);
console.log(
	'Last Occurrence of 25 Iterative : ',
	lastOccurrenceOfElementIterative([...arr], 25),
);
console.log(
	'Last Occurrence of 25 Recursive : ',
	lastOccurrenceOfElementRecursive([...arr], 25),
);

console.log('---------------------------------------------------------------');

function totalOccurrenceOfElementIterative(arr, target) {
	let frequency = 0;

	for (let i = 0; i < arr.length; i++) {
		if (target === arr[i]) frequency++;
	}

	return frequency;
}

function totalOccurrenceOfElementRecursive(arr, target, frequency = 0, index = 0) {
	if (index === arr.length) return frequency;

	if (arr[index] === target)
		return totalOccurrenceOfElementRecursive(arr, target, frequency + 1, index + 1);

	return totalOccurrenceOfElementRecursive(arr, target, frequency, index + 1);
}

console.log(
	'Total Occurrence of 5 Iterative : ',
	totalOccurrenceOfElementIterative([...arr], 5),
);
console.log(
	'Total Occurrence of 5 Recursive : ',
	totalOccurrenceOfElementRecursive([...arr], 5),
);
console.log(
	'Total Occurrence of 41 Iterative : ',
	totalOccurrenceOfElementIterative([...arr], 41),
);
console.log(
	'Total Occurrence of 41 Recursive : ',
	totalOccurrenceOfElementRecursive([...arr], 41),
);
console.log(
	'Total Occurrence of 25 Iterative : ',
	totalOccurrenceOfElementIterative([...arr], 25),
);
console.log(
	'Total Occurrence of 25 Recursive : ',
	totalOccurrenceOfElementRecursive([...arr], 25),
);

console.log('---------------------------------------------------------------');
