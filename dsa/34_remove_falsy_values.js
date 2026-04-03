function removeFalsy(arr) {
	//@ return arr.filter(Boolean);

	return arr.reduce((answer, currEle) => {
		return Boolean(currEle) ? [...answer, currEle] : [...answer];
	}, []);
}

const arr1 = [
	true,
	false,
	1,
	0,
	-1,
	'',
	'hello',
	null,
	undefined,
	NaN,
	[],
	{},
	function () {},
];

console.log('-----------------');
console.log(removeFalsy(arr1));
