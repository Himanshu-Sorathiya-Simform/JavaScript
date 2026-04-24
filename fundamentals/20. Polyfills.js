const arr = [1, 2, 3, [4, 5], [[6, 7, [10]], 8, 9], 9];

// FOREACH
Array.prototype.myForEach = function (cb) {
	for (let i = 0; i < this.length; i++) {
		cb(this[i], i, this);
	}
};
// arr.myForEach((el, i, some) => console.log(el, i, some));

// MAP
Array.prototype.myMap = function (cb) {
	const ans = [];

	for (let i = 0; i < this.length; i++) {
		ans.push(cb(this[i], i, this));
	}

	return ans;
};
// console.log(arr.myMap((el) => el * 2));

// FILTER
Array.prototype.myFilter = function (cb) {
	const ans = [];

	for (let i = 0; i < this.length; i++) {
		if (!!cb(this[i], i, this)) ans.push(this[i]);
	}

	return ans;
};
// console.log(arr.myFilter((el) => el % 2));

// REDUCE
Array.prototype.myReduce = function (cb, startWith = 0) {
	let ans = startWith;

	for (let i = 0; i < this.length; i++) {
		ans = cb(ans, this[i], i, this);
	}

	return ans;
};
// console.log(arr.myReduce((sum, curr, i, arr) => sum + curr, 0));

// FLAT
Array.prototype.myFlat = function (depth = 1) {
	const ans = [];

	for (let i = 0; i < this.length; i++) {
		if (depth > 0 && Array.isArray(this[i])) {
			ans.push(...this[i].myFlat(depth - 1));
		} else ans.push(this[i]);
	}

	return ans;
};
// console.log(arr.myFlat(2));
