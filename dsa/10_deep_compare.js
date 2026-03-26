function deepCompare(obj1, obj2) {
	if (!obj1 || !obj2 || typeof obj1 !== 'object' || typeof obj2 !== 'object')
		return obj1 === obj2;
	else if (obj1 instanceof Map && obj2 instanceof Map) {
		return deepCompare([...obj1.entries()], [...obj2.entries()]);
	} else if (obj1 instanceof Set && obj2 instanceof Set) {
		return deepCompare([...obj1.values()], [...obj2.values()]);
	} else if (obj1 instanceof Date && obj2 instanceof Date)
		return deepCompare(obj1.getTime(), obj2.getTime());
	else if (obj1 instanceof Array && obj2 instanceof Array) {
		if (obj1.length !== obj2.length) return false;

		for (let i = 0; i < obj1.length; i++) {
			if (!deepCompare(obj1[i], obj2[i])) return false;
		}

		return true;
	} else if (obj1 instanceof Object && obj2 instanceof Object) {
		const o1 = Object.entries(obj1);
		const o2 = Object.entries(obj2);

		return o1.size !== o2.size ? false : deepCompare(o1, o2);
	}

	return true;
}

const obj1 = {
	a: {
		f: new Map([
			['hello', 123],
			[15, 15],
			[true, false],
		]),
		g: new Set([1, 2, { a: 15 }]),
		e: ['a', 1, { 3: 12 }],
		b: 15,
		d: true,
		c: 'abc',
	},
};
const obj2 = {
	a: {
		f: new Map([
			['hello', 123],
			[15, 15],
			[true, false],
		]),
		g: new Set([1, 2, { a: 15 }]),
		e: ['a', 1, { 3: 12 }],
		b: 15,
		d: true,
		c: 'abc',
	},
};

console.log(deepCompare(obj1, obj2));
