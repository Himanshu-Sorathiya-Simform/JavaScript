let age = 18;
let result = age >= 18 ? 'Adult' : 'Minor';
console.log(result); // Adult

let canVote = age >= 18 ? true : false;
console.log(canVote); // true

function checkTemp(temp) {
	return temp > 30 ? 'Hot' : 'Normal';
}
console.log(checkTemp(35)); // "Hot"
