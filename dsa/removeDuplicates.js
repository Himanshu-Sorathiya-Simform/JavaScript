function isElementDuplicate(arr, target, end) {
	// console.log('Searching from:', 0, 'to', end - 1);

	for (let i = 0; i < end; i++) {
		if (arr[i] === target) return true;
	}

	return false;
}

function removeDuplicates(arr) {
	let left = 0,
		right = arr.length - 1;

	while (left < right) {
		// console.log('element to check:', arr[left]);

		if (isElementDuplicate(arr, arr[left], left)) {
			let temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;

			right--;

			console.log(arr);
		} else {
			left++;
		}

		// console.log('-------');
	}

	return arr.slice(0, right + 1);
}

let arr11 = [1, 0, 20, 5, 3, 0, 7, 5];
let arr12 = [1, 0, 3, 5, 7, 7, 0, 5, 7, 1, 3, 0, 0, 5, 0];
console.log('removeDuplicates');
console.log('Original : ', arr11);
console.log('Expected Answer : ', [...new Set(arr11)]);
console.log('Returned Answer : ', removeDuplicates(arr11));
// console.log('---------------------------------------');
// console.log('Original : ', arr12);
// console.log('Expected Answer : ', [...new Set(arr12)]);
// console.log('Returned Answer : ', removeDuplicates(arr12));
