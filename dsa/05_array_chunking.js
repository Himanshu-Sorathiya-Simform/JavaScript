function arrayChunk(arr, chunkSize = 1) {
	if (chunkSize <= 0) return arr;

	let ans = [];

	let i = 0;
	while (i < arr.length) {
		ans.push(arr.slice(i, i + chunkSize));
		i += chunkSize;
	}

	return ans;
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10, 20, 30, 40];

console.log('---------------------------------------------------------------');
console.log('Array Chunking');
console.log(arr);
console.log(arrayChunk(arr, -3));
console.log(arrayChunk(arr, 4));
console.log(arrayChunk(arr, 5));
