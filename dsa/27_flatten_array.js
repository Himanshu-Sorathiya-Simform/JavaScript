function flatten(arr) {
	const ans = [];

	for (const ele of arr) {
		if (Array.isArray(ele)) ans.push(...flatten(ele));
		else ans.push(ele);
	}

	return ans;
}

console.log('-------------');
const arr = [1, '2', { 3: '3' }, [4, 5], [6, [7, 8, [9, 10]], 11, [12], 13], 14];

console.log(flatten(arr));
