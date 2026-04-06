let count = 0;

function climb(num, ans = []) {
	if (num === 0) {
		console.log(ans.join(' '));
		count++;
	}

	for (let i = 1; i <= num; i++) {
		ans.push(i);
		climb(num - i, ans);
		ans.pop();
	}
}

console.log('----------');
climb(4);
console.log('COUNT ', count);
