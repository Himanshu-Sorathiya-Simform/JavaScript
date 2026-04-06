const main = document.querySelector('main');
const button = document.querySelector('button');

let scrollPoint = 5;

function createCards(num) {
	for (let i = 0; i < num; i++) {
		const card = document.createElement('article');
		card.classList.add('card');

		main.append(card);
	}
}
createCards(20);

// window.addEventListener('scroll', () => {
// 	if (
// 		window.pageYOffset >
// 		(document.body.getBoundingClientRect().height * scrollPoint) / 10
// 	) {
// 		createCards(10);

// 		scrollPoint = Math.min(9.3, scrollPoint + 0.3);
// 	}
// });

// setInterval(() => {
// 	createCards(10);

// 	scrollPoint = Math.min(9.3, scrollPoint + 0.3);
// }, 10000);

// button.addEventListener('click', () => {
// 	createCards(10);
// });

// function debounce(func, delay) {
// 	let timer;

// 	return function () {
// 		clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			func();
// 		}, delay);
// 	};
// }

// function addCards() {
// 	createCards(10);
// }

// const debounceCards = debounce(addCards, 5000);

// button.addEventListener('click', debounceCards);
