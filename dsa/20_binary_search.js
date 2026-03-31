function binarySearchIterative(arr, target) {
	let left = 0,
		right = arr.length - 1;
	let mid;

	while (left <= right) {
		mid = Math.floor((left + right) / 2);

		if (arr[mid] === target) {
			return true;
		} else if (arr[mid] < target) {
			left = mid + 1;
		} else if (arr[mid] > target) {
			right = mid - 1;
		}
	}

	return false;
}

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
	const mid = Math.floor((left + right) / 2);

	if (arr[mid] === target) return true;

	if (left > right) return false;

	if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);

	if (arr[mid] > target) return binarySearchRecursive(arr, target, left, mid - 1);
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10, 12];
const arr3 = [0, 11, 22, 33, 44];
const arr4 = [5, 15, 25, 35, 45, 55];
const arr5 = [7, 14, 21, 28, 35];
const arr6 = [9, 18, 27, 36, 45, 54];
const arr7 = [3, 6, 9, 12, 15];
const arr8 = [10, 20, 30, 40, 50, 60];

console.log('Arr4 ', arr4);
console.log('Arr5 ', arr5);

console.log('--------------------');
console.log('Arr4 Target 15', binarySearchIterative(arr4, 15));
console.log('Arr4 Target 25', binarySearchIterative(arr4, 25));
console.log('Arr4 Target 55', binarySearchIterative(arr4, 55));
console.log('Arr4 Target 5', binarySearchIterative(arr4, 5));
console.log('Arr4 Target 50', binarySearchIterative(arr4, 50));

console.log('--------------------');
console.log('Arr5 Target 7', binarySearchRecursive(arr5, 7));
console.log('Arr5 Target 21', binarySearchRecursive(arr5, 21));
console.log('Arr5 Target 35', binarySearchRecursive(arr5, 35));
console.log('Arr5 Target 5', binarySearchRecursive(arr5, 5));
