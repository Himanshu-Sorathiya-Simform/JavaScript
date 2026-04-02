function findTarget(arr, target) {
	arr.sort((a, b) => a - b);

	let left = 0,
		right = arr.length - 1;

	while (left < right) {
		if (arr[left] + arr[right] === target) return [true, arr[left], arr[right]];
		else if (arr[left] + arr[right] < target) left++;
		else if (arr[left] + arr[right] > target) right--;
	}

	return false;
}

console.log('---------------------------------------------------------------');
console.log('Sum of Two');

let arr = [28, -10, 5, 15, 41, 5, -11, -5, 5, 7];
console.log('Array :', arr);
console.log('Target : 10', findTarget(arr, 10));
console.log('Target : 15', findTarget(arr, 15));
console.log('Target : 20', findTarget(arr, 20));
console.log('Target : -4', findTarget(arr, -4));
console.log('Target : 18', findTarget(arr, 18));
console.log('Target : 25', findTarget(arr, 25));
