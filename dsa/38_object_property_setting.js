const isUndefined = (obj) => {
	return obj === undefined;
};

function internal(obj, original, val, setValue) {
	if (isUndefined(obj[val[0]])) {
		obj[val[0]] = /^\d+$/.test(val[1]) ? [] : {};
	}

	if (val.length === 1) {
		obj[val[0]] = setValue;

		return original;
	}

	return internal(obj[val[0]], original, val.slice(1), setValue);
}

function setPropertyValue(obj, val, setValue) {
	const clone = structuredClone(obj);

	return internal(
		clone,
		clone,
		(val =
			typeof val !== 'string' ? val : (
				val
					.replaceAll('[', '.')
					.replaceAll(']', '')
					.replace(/\s+/g, '')
					.split('.')
			)),
		setValue,
	);
}

const obj = {
	a: {
		b: {
			c: [1, 2, 3],
		},
	},
};

console.log(setPropertyValue(obj, 'd[0].e.f[0]', 15));
console.log(setPropertyValue(obj, 'a.b.c', 15));
console.log(setPropertyValue(obj, 'a.b.c.3', 'its working'));
console.log(setPropertyValue(obj, ['a', 'b', 'd', 'e', 'f'], 'i did it (partially)'));
console.log(setPropertyValue(obj, ['a', 'b', 'c', '1'], 'hurray!???'));
console.log(setPropertyValue(obj, ['a', 'b', 'c', '3'], 'hurray!'));
console.log(
	setPropertyValue(obj, ['a', 'c', 'd', 'e', 'f'], 'this should work i guess!'),
);
console.log(setPropertyValue(obj, 'a.b.c[1]', 'it MUST work'));
console.log(setPropertyValue(obj, 'a.b.c[4]', 'it MUST work'));
console.log(setPropertyValue(obj, 'a.b[c]', [15]));
console.log(setPropertyValue(obj, 'a.b[c][0]', 'let me try this stuff'));
console.log(setPropertyValue(obj, 'a[b[c]][0]', 'bulletproof by La Roux'));
