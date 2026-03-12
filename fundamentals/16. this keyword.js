const himanshu = {
	name: 'himanshu',
	age: 22,

	greet: function () {
		console.log('---------------------------');
		console.log(this);
		console.log(`hello, ${this.name}`);
		console.log('---------------------------');
	},

	add: () => {
		console.log('---------------------------');
		console.log(this);
		console.log(`hello, ${this.age}`);
		console.log('---------------------------');
	},

	nestParent: function () {
		console.log('---------------------------');
		console.log('im parent');
		console.log('parent this', this);

		const nestChild = () => {
			console.log('im child');
			console.log('im child this', this);
			console.log(this.name);

			// return () => {
			// 	console.log('hello this');

			// 	console.log(this);
			// };

			return function hello() {
				console.log('hello this');

				console.log(this);
			};
		};
		const hello = nestChild();
		hello();
	},
};
himanshu.greet();
himanshu.add();
himanshu.nestParent();

// if it was let or var, itll print undefined undefined
var a = 15,
	b = 0;
function add1(a = 1, b = 1) {
	console.log('---------------------------');
	console.log(this);
	console.log(this.a, this.b);
	console.log('---------------------------');
}
add1(5, 7);

const add2 = (dd) => this.dd + this.dd;
console.log('---------------------------');
console.log(add2(5));
console.log('---------------------------');

let age = 22;
console.log(this.age);
