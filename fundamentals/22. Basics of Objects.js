const person1 = {
	name: 'Himanshu',
	age: 25,
	isStudent: true,
};

const person2 = new Object();
person2.name = 'Himanshu';
person2.age = 25;
person2['language'] = 'Gujarati';

console.log(person1.name); // Himanshu
console.log(person2['age']); // 25

const person = {
	name: 'Himanshu',
	age: 25,

	greet: function () {
		console.log('Hello, ' + this.name);
	},
};

person.greet(); // Hello, Himanshu
