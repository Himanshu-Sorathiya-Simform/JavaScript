function deepFreeze(obj) {
	if (obj === null || obj === undefined || typeof obj !== 'object') return obj;

	Object.freeze(obj);

	if (obj instanceof Map) {
		for (const [key, value] of obj) {
			deepFreeze(key);
			deepFreeze(value);
		}
	}

	for (const key in obj) {
		deepFreeze(obj[key]);
	}
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

console.log(obj);

deepFreeze(obj);

obj.address.city = 'Gandhinagar';
obj.name = 'HIMANSHU';
delete obj.age;
// obj.hobbies.push('him');
obj.mapping.delete(true);
obj.friends.delete('Himanshu');
obj.dob.setFullYear(2004);

console.log(obj);
