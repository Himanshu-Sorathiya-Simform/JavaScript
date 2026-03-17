let arr = [10, 20, 30, 40, 50, 60];

function headRecursion(arr) {
	if (arr.length === 0) return;

	headRecursion(arr.slice(1));

	console.log(arr[0]);
}

function tailRecursion(arr) {
	if (arr.length === 0) return;

	console.log(arr[0]);

	tailRecursion(arr.slice(1));
}

tailRecursion(arr);
console.log('---------------------');
headRecursion(arr);
