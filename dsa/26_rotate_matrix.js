function rotate(matrix) {
	// [
	// 	[13, 9, 5, 1],
	// 	[14, 10, 6, 2],
	// 	[15, 11, 7, 3],
	// 	[16, 12, 8, 4],
	// ];

	const ans = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	];

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			ans[j][matrix.length - i - 1] = matrix[i][j];
		}
	}

	return ans;
}

const matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];

console.log('----------------');
console.log('Matrix : ', matrix);
console.log('Rotated Matrix : ', rotate(matrix));
