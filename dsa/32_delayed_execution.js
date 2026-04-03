function promise(ms) {
	let secs = 0;

	const intervalId = setInterval(() => {
		console.log(`${++secs} seconds`);

		ms <= secs * 1000 && clearInterval(intervalId);
	}, 1000);

	function resolve() {
		console.log(`Promised resolved after : ${ms} ms`);
	}

	setTimeout(() => {
		return new Promise(resolve);
	}, ms);
}

console.log('-----------------');
promise(5000);
