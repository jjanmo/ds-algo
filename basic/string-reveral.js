function strReverse1(str) {
	return str.split('').reverse().join('');
}

console.log(strReverse1('hello world'));

function strReverse2(str) {
	let reverseStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reverseStr += str[i];
	}
	return reverseStr;
}

console.log(strReverse2('Given a string of characters'));

function strReverse3(str) {
	//let lastIndex = str.length - 1;
	// return str.split('').reduce((ac, _, i, array) => (ac + array[lastIndex - i]), '');

	// wow! Think outside the box🚀
	return str.split('').reduce((ac, char) => char + ac);
}

console.log(strReverse3('This solution can be written in just one line of code!'));
