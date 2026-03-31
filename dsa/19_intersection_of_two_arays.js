function intersection(arr1, arr2) {
	const ans = [];

	arr1.forEach((el) => {
		arr2.includes(el) && ans.push(el);
	});

	return ans;
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
console.log('Arr7 ', arr7);
console.log('Arr8 ', arr8);

console.log('--------------------');
console.log('Intersection 1 7', intersection(arr1, arr7));
console.log('Intersection 1 8', intersection(arr1, arr8));
