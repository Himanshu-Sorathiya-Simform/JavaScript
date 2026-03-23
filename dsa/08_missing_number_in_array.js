function findMissingNumber(arr) {
	return (
		((arr.length + 1) * (arr.length + 2)) / 2 -
		arr.reduce((curr, element) => curr + element, 0)
	);
}

console.log('---------------------------------------------------------------');
console.log('Missing Number in Array');

const arr1 = [1, 2, 3, 5];
const arr2 = [1, 2, 4, 5, 6];
const arr3 = [2, 3, 4, 5];
const arr4 = [1, 3, 4, 5, 6, 7];
const arr5 = [1, 2, 3, 4, 6, 7, 8];

console.log(arr1 + ' :', findMissingNumber(arr1));
console.log(arr2 + ' :', findMissingNumber(arr2));
console.log(arr3 + ' :', findMissingNumber(arr3));
console.log(arr4 + ' :', findMissingNumber(arr4));
console.log(arr5 + ' :', findMissingNumber(arr5));
