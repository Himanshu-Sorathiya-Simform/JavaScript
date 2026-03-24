function getPropertyValue(obj, val, defaultValue) {
	// console.log('obj', obj);
	// console.log('val', val);

	if (typeof val === 'string')
		return getPropertyValue(
			obj,
			val.replaceAll('[', '.').replaceAll(']', '').replace(/\s+/g, '').split('.'),
			defaultValue,
		); // convert string to array for easiness

	if (!obj) return defaultValue; // return when accessing not existing things

	if (!val.length) return obj; // i converted everything to array, this is for stopping when we reach end and recursively "obj" will be updated with nested property values

	return getPropertyValue(obj[val[0]], val.slice(1), defaultValue);
}

const obj = {
	a: {
		b: {
			c: [1, 2, 3],
		},
	},
};

console.log(getPropertyValue(obj, 'a.b')); // {c: [1,2,3]}
console.log(getPropertyValue(obj, 'a.b.c')); // [1,2,3]
console.log(getPropertyValue(obj, 'a.b.c.0')); // 1
console.log(getPropertyValue(obj, ['a', 'b'])); // {c: [1,2,3]}
console.log(getPropertyValue(obj, ['a', 'b', 'c', '2'])); // 3
console.log(getPropertyValue(obj, ['a', 'b', 'c', '5'])); // undefined
console.log(getPropertyValue(obj, 'a.b.c.d')); // undefined
console.log(getPropertyValue(obj, ['a', 'c'])); // undefined
console.log(getPropertyValue(obj, ['a', 'c'], 'abc')); // abc
console.log(getPropertyValue(obj, 'a.b.c[1]')); // 2
console.log(getPropertyValue(obj, 'a.b.c[3]')); // undefined
console.log(getPropertyValue(obj, 'a.b[c]')); // [1,2,3]
console.log(getPropertyValue(obj, 'a.b[c][0]')); //1
console.log(getPropertyValue(obj, 'a.b[c[0]]')); // 1
console.log(getPropertyValue(obj, 'a[b[c]][0]')); // 1
