function reduceForFilter(arr, query) {
	return arr.reduce((answer, currEle) => {
		return currEle > query ? [...answer, currEle] : [...answer];
	}, []);
}

function reduceForMap(arr, modifier) {
	return arr.reduce((answer, currEle) => {
		return [...answer, currEle * modifier];
	}, []);
}

console.log('-----------------');
let arr1 = [28, -10, 5, 15, 41, 5, -11, -5, 5, 7];
console.log(reduceForFilter(arr1, 5));
console.log(reduceForMap(arr1, 2));
