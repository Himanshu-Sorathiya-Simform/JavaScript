let score = 75;
if (score >= 90) {
	console.log('A grade');
} else if (score >= 70) {
	console.log('B grade');
} else if (score >= 50) {
	console.log('C grade');
} else {
	console.log('Fail');
}

let age = 18;
let result = age >= 18 ? 'Adult' : 'Minor';
console.log(result); // Adult

let canVote = age >= 18 ? true : false;
console.log(canVote); // true

function checkTemp(temp) {
	return temp > 30 ? 'Hot' : 'Normal';
}
console.log(checkTemp(35)); // "Hot"

let day = 3;
switch (day) {
	case 1:
		console.log('Monday');
		break;

	case 2:
		console.log('Tuesday');
		break;

	case 3:
		console.log('Wednesday');
		break;

	default:
		console.log('Invalid day');
}
// Wednesday
