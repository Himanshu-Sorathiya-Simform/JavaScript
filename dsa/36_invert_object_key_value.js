function invert(obj) {
	const ans = {};

	for (const [key, value] of Object.entries(obj)) {
		ans[value] = key;
	}

	return ans;
}

console.log('-------------');
const obj = {
	id: 1,
	title: 'Book',
	price: 299,
	available: 'yes',
};

console.log('Normal : ', obj);
console.log('Invert : ', invert(obj));
