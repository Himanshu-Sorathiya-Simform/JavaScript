function shuffleArrayBruteForce(arr) {
	let num = Math.floor(Math.random() * 20 + 20);

	while (num) {
		const idx1 = Math.floor(Math.random() * arr.length);
		const idx2 = Math.floor(Math.random() * arr.length);

		let temp = arr[idx1];
		arr[idx1] = arr[idx2];
		arr[idx2] = temp;

		num--;
	}

	return arr;
}

function shuffleArray(arr) {
	return arr.toSorted(() => Math.random() - 0.5);
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10, 12];
const arr3 = [0, 11, 22, 33, 44];
const arr4 = [5, 15, 25, 35, 45, 55, 9, 18, 27, 36, 45, 54];
const arr5 = [7, 14, 21, 28, 35];
const arr6 = [9, 18, 27, 36, 45, 54];
const arr7 = [3, 6, 9, 12, 15];
const arr8 = [10, 20, 30, 40, 50, 60];

console.log('---------------------------------------------------------------');
console.log('Before : ', arr4);
console.log('After : ', shuffleArrayBruteForce([...arr4]));
console.log('After : ', shuffleArray([...arr4]));
