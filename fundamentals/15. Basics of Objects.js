const person = {
	name: 'Himanshu',
	age: 25,
	isStudent: true,

	greet: function () {
		console.log('Hello, ' + this.name);
	},
};

const person2 = new Object();
person2.name = 'Himanshu';
person2.age = 25;
person2['language'] = 'Gujarati';

console.log(person.name); // Himanshu
console.log(person2['age']); // 25

person.greet(); // Hello, Himanshu

let key = 'name';

// console.log(user.address.city);
console.log(person.address?.city);
console.log(person.address?.location?.city);
console.log(person.greet?.());
console.log(person?.[key]);

let users = [{ name: 'Himanshu' }, { name: 'Rahul' }];

console.log(users[2]?.name);

let city = users?.[5].address?.city ?? 'Unknown';
console.log(city);

for (let key of Object.keys(person)) {
	console.log(key);
}

for (let value of Object.values(person)) {
	console.log(value);
}

for (let [key, value] of Object.entries(person)) {
	console.log(key, value);
}
