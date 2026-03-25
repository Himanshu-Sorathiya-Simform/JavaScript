function getPropertyValueRecursive(obj, val, defaultValue) {
	if (typeof val === 'string')
		return getPropertyValueRecursive(
			obj,
			val.replaceAll('[', '.').replaceAll(']', '').replace(/\s+/g, '').split('.'),
			defaultValue,
		); // convert string to array for easiness

	if (!obj) return defaultValue; // return when accessing not existing things

	if (val.length === 0) return obj;

	return getPropertyValueRecursive(obj[val[0]], val.slice(1), defaultValue);
}

function getPropertyValueIterative(obj, val, defaultValue) {
	if (typeof val === 'string')
		val = val.replaceAll('[', '.').replaceAll(']', '').replace(/\s+/g, '').split('.'); // convert string to array for easiness

	for (const key of val) {
		obj = obj[key];

		if (!obj) return defaultValue; // return when accessing not existing things
	}

	return obj;
}

const obj = {
	a: {
		b: {
			c: [1, 2, 3],
		},
	},
};

console.log(getPropertyValueIterative(obj, 'a.b')); // {c: [1,2,3]}
console.log(getPropertyValueIterative(obj, 'a.b.c')); // [1,2,3]
console.log(getPropertyValueIterative(obj, 'a.b.c.0')); // 1
console.log(getPropertyValueIterative(obj, ['a', 'b'])); // {c: [1,2,3]}
console.log(getPropertyValueIterative(obj, ['a', 'b', 'c', '2'])); // 3
console.log(getPropertyValueIterative(obj, ['a', 'b', 'c', '5'])); // undefined
console.log(getPropertyValueIterative(obj, 'a.b.c.d')); // undefined
console.log(getPropertyValueIterative(obj, ['a', 'c'])); // undefined
console.log(getPropertyValueIterative(obj, ['a', 'c'], 'abc')); // abc
console.log(getPropertyValueIterative(obj, 'a.b.c[1]')); // 2
console.log(getPropertyValueIterative(obj, 'a.b.c[3]')); // undefined
console.log(getPropertyValueIterative(obj, 'a.b[c]')); // [1,2,3]
console.log(getPropertyValueIterative(obj, 'a.b[c][0]')); //1
console.log(getPropertyValueIterative(obj, 'a.b[c[0]]')); // 1
console.log(getPropertyValueIterative(obj, 'a[b[c]][0]')); // 1

console.log('------------------------------');

console.log(getPropertyValueRecursive(obj, 'a.b')); // {c: [1,2,3]}
console.log(getPropertyValueRecursive(obj, 'a.b.c')); // [1,2,3]
console.log(getPropertyValueRecursive(obj, 'a.b.c.0')); // 1
console.log(getPropertyValueRecursive(obj, ['a', 'b'])); // {c: [1,2,3]}
console.log(getPropertyValueRecursive(obj, ['a', 'b', 'c', '2'])); // 3
console.log(getPropertyValueRecursive(obj, ['a', 'b', 'c', '5'])); // undefined
console.log(getPropertyValueRecursive(obj, 'a.b.c.d')); // undefined
console.log(getPropertyValueRecursive(obj, ['a', 'c'])); // undefined
console.log(getPropertyValueRecursive(obj, ['a', 'c'], 'abc')); // abc
console.log(getPropertyValueRecursive(obj, 'a.b.c[1]')); // 2
console.log(getPropertyValueRecursive(obj, 'a.b.c[3]')); // undefined
console.log(getPropertyValueRecursive(obj, 'a.b[c]')); // [1,2,3]
console.log(getPropertyValueRecursive(obj, 'a.b[c][0]')); //1
console.log(getPropertyValueRecursive(obj, 'a.b[c[0]]')); // 1
console.log(getPropertyValueRecursive(obj, 'a[b[c]][0]')); // 1
