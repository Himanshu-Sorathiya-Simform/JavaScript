function extra() {
	let x = 10;

	function nothing() {}
}

function parent() {
	let count = 0;
	let ignored = 15;

	function child() {
		count++;
	}
	function discarded() {}

	console.dir(child);
	// return function hello() {
	// 	child();

	// 	console.log(`Count ${count++}`);
	// };
}

const main = parent();

console.dir(extra);
console.dir(main);
