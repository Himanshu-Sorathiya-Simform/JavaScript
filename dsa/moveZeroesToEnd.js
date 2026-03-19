function moveZeroesToEnd(arr) {
	let left = 0,
		right = arr.length - 1;

	while (left < right) {
		if (arr[left] === 0) {
			let temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;

			right--;
		} else {
			left++;
		}
	}

	return arr;
}

let arr1 = [1, 0, 20, 3, 0, 0, 5];
let arr2 = [1, 0, 3, 5, 7, 7, 7, 1, 3, 0, 0, 5, 0];
console.log('---------------------------------------');
console.log('moveZeroesToEnd');
console.log('Before : ', arr1);
console.log('After : ', moveZeroesToEnd(arr1));
console.log('Before : ', arr2);
console.log('After : ', moveZeroesToEnd(arr2));
