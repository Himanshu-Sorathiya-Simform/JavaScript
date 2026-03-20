function doArrayObjectMapping(obj, deepCopy, structure) {
	for (let key in obj) {
		structure[key] = deepCopy(obj[key]);
	}

	return structure;
}

function doMapMapping(obj, deepCopy, structure) {
	for (let [key, value] of obj) {
		structure.set(deepCopy(key), deepCopy(value));
	}

	return structure;
}

function doSetMapping(obj, deepCopy, structure) {
	for (let value of obj) {
		structure.add(deepCopy(value));
	}

	return structure;
}

function doDateMapping(obj) {
	return new Date(obj.getTime());
}

function deepCopy(obj) {
	if (obj === null || obj === undefined || typeof obj !== 'object') return obj;

	if (Array.isArray(obj)) return doArrayObjectMapping(obj, deepCopy, []);
	else if (obj instanceof Set) return doSetMapping(obj, deepCopy, new Set());
	else if (obj instanceof Map) return doMapMapping(obj, deepCopy, new Map());
	else if (obj instanceof Date) return doDateMapping(obj);
	else return doArrayObjectMapping(obj, deepCopy, {});
}

const obj = {
	name: 'Himanshu',
	dob: new Date(),
	age: 22,
	address: {
		city: 'Surat',
		state: 'Gujarat',
	},
	friends: new Set([
		'Vatsal',
		'Krutarth',
		'Krish',
		'Mantu',
		'Jenith',
		'Kushal',
		'Satyam',
		'Himanshu',
	]),
	mapping: new Map([
		[true, ['funny', { toCap: 'thats my secret cap, im never angry' }]],
		[false, 'you say'],
	]),
	hobbies: ['reading', 'music', 'movies'],
};

const copy1 = deepCopy(obj);

copy1.address.city = 'Gandhinagar';
copy1.name = 'HIMANSHU';
delete copy1.age;
copy1.hobbies.push('him');
copy1.mapping.delete(true);
copy1.friends.delete('Himanshu');
copy1.dob.setFullYear(2004);

console.log(obj);
console.log(copy1);
