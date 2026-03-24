const LocalStorage = {
	prefix: 'local__',

	setItem(key, value, timeToExpire = 5000) {
		const expiry = Date.now() + timeToExpire;

		localStorage.setItem(this.prefix + key, JSON.stringify({ value, expiry }));
	},

	getItem(key) {
		const item = localStorage.getItem(this.prefix + key);
		if (!item) return "Key doesn't exist";

		const { value, expiry } = JSON.parse(item);

		if (Date.now() > expiry) {
			localStorage.removeItem(this.prefix + key);
			return 'Value expired';
		}

		return value;
	},

	removeItem(key) {
		const fullKey = this.prefix + key;
		const item = localStorage.getItem(fullKey);

		if (!item) return "Key doesn't exist";

		const { expiry } = JSON.parse(item);

		localStorage.removeItem(fullKey);

		return Date.now() > expiry ? 'Key expired' : 'Key removed';
	},
};

LocalStorage.setItem('token', 1423, 5000);

setTimeout(() => {
	console.log(LocalStorage.getItem('token'));
}, 5000);

setTimeout(() => {
	console.log(LocalStorage.removeItem('token'));
}, 8000);

let secs = 1;
const interval = setInterval(() => {
	console.log(secs++);

	if (secs === 10) clearInterval(interval);
}, 1000);
