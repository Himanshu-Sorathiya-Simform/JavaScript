const ans = [];

function findSubsequence(str, currSubsequence = '') {
	if (str.length === 0) {
		currSubsequence += str;

		ans.push((currSubsequence += str));

		return;
	}

	findSubsequence(str.slice(1), currSubsequence);
	findSubsequence(str.slice(1), currSubsequence + str[0]);
}

console.log('----------------');
console.log('[1,2,3] : ', findSubsequence([1, 2, 3]));
console.log(ans);
