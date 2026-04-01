function merge(arr1, arr2) {
	const ans = [];

	let i = 0;

	while (i !== arr1.length && i !== arr2.length) {
		const entries1 = Object.entries(arr1[i]);
		const entries2 = Object.entries(arr2[i]);

		const obj = {};
		for (const [key, value] of entries1) {
			obj[key] = value;
		}

		for (const [key, value] of entries2) {
			obj[key] = value;
		}

		ans.push(obj);
		i++;
	}

	return ans;
}

const arr1 = [{ a: 15, b: 17 }, { a: 15, b: 17, c: 5 }, {}, { a: 15 }];
const arr2 = [{ c: 15, d: 17 }, { c: 15 }, { c: 15 }];

console.log('Arr1 ', arr1);
console.log('Arr2 ', arr2);

console.log('merge of arr1 2');
console.log(merge(arr1, arr2));
