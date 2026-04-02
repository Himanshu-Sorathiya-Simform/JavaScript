function isOpening(char) {
	return ['(', '[', '{'].includes(char);
}

function isClosing(char) {
	return [')', ']', '}'].includes(char);
}

function isSameClosing(top, char) {
	switch (top) {
		case '(':
			return char === ')';
		case '[':
			return char === ']';
		case '{':
			return char === '}';
		default:
			return false;
	}
}

function validParentheses(str) {
	let top = '';
	const arr = [];

	for (const char of str) {
		if (isOpening(char)) {
			arr.push(char);
			top = char;
		}

		if (isClosing(char)) {
			if (isSameClosing(top, char)) {
				arr.pop();
				top = arr.at(-1);
			} else return false;
		}
	}

	return arr.length === 0;
}

const str1 = '()';
const str2 = '[]';
const str3 = '()[]{}';
const str4 = '([{}])';
const str5 = '(([({})]))';

const str6 = '(]';
const str7 = '([)]';
const str8 = '((()';
const str9 = '({[})]';
const str10 = '())[]';

const str11 = '';
const str12 = 'a';

console.log('------------------');
console.log('Str1 :', str1, validParentheses(str1));
console.log('Str2 :', str2, validParentheses(str2));
console.log('Str3 :', str3, validParentheses(str3));
console.log('Str4 :', str4, validParentheses(str4));
console.log('Str5 :', str5, validParentheses(str5));
console.log('Str6 :', str6, validParentheses(str6));
console.log('Str7 :', str7, validParentheses(str7));
console.log('Str8 :', str8, validParentheses(str8));
console.log('Str9 :', str9, validParentheses(str9));
console.log('Str10 :', str10, validParentheses(str10));
console.log('Str11 :', str11, validParentheses(str11));
console.log('Str12 :', str12, validParentheses(str12));
