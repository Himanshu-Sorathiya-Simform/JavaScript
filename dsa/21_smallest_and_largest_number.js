function findSmallestAndLargest(arr) {
	let smallest = Number.MAX_SAFE_INTEGER;
	let largest = Number.MIN_SAFE_INTEGER;

	for (const num of arr) {
		smallest = Math.min(smallest, num);
		largest = Math.max(largest, num);
	}

	return [`Smallest : ${smallest}`, `Largest ${largest}`];
}

const arr1 = [12, -5, 33, -18, 7, -2, 25, -41];
const arr2 = [-9, 44, -27, 3, -16, 8, 19, -35, 2];
const arr3 = [50, -11, -6, 28, -39, 14, -1, 22];
const arr4 = [-23, 5, 17, -8, 31, -45, 9, -12];

console.log('Arr1 ', arr1);
console.log('Arr2 ', arr2);
console.log('Arr3 ', arr3);
console.log('Arr4 ', arr4);

console.log('--------------------');
console.log('Arr1', findSmallestAndLargest(arr1));
console.log('Arr2', findSmallestAndLargest(arr2));
console.log('Arr3', findSmallestAndLargest(arr3));
console.log('Arr4', findSmallestAndLargest(arr4));
