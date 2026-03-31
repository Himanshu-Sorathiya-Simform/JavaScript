function merge(arr1, arr2) {
	const ans = [];

	let i = 0,
		j = 0;

	while (i !== arr1.length && j !== arr2.length) {
		if (arr1[i] <= arr2[j]) {
			ans.push(arr1[i++]);
		} else {
			ans.push(arr2[j++]);
		}
	}

	while (i !== arr1.length) {
		ans.push(arr1[i++]);
	}

	while (j !== arr2.length) {
		ans.push(arr2[j++]);
	}

	return ans;
}

function mergeWayTooSimple(arr1, arr2) {
	return [...arr1, ...arr2].sort((a, b) => a - b);
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10, 12];
const arr3 = [0, 11, 22, 33, 44];
const arr4 = [5, 15, 25, 35, 45, 55];
const arr5 = [7, 14, 21, 28, 35];
const arr6 = [9, 18, 27, 36, 45, 54];
const arr7 = [3, 6, 9, 12, 15];
const arr8 = [10, 20, 30, 40, 50, 60];

console.log('Arr1 ', arr1);
console.log('Arr2 ', arr2);
console.log('Arr3 ', arr3);
console.log('Arr4 ', arr4);
console.log('Arr5 ', arr5);
console.log('Arr6 ', arr6);
console.log('Arr7 ', arr7);
console.log('Arr8 ', arr8);

console.log('--------------------');
console.log('Merge 1 7', merge(arr1, arr7));
console.log('Merge 1 8', merge(arr1, arr8));
