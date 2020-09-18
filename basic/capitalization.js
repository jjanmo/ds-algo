//문제
//Given a phrase, capitalize every word.

function capitalize(str) {
	const strArray = str.split(' ');
	const newArray = [];
	for (let i = 0; i < strArray.length; i++) {
		const firstLetter = strArray[i].slice(0, 1).toUpperCase();
		const rest = strArray[i].slice(1);
		newArray.push(firstLetter + rest);
	}

	return newArray.join(' ');
}

console.log(capitalize('hello world'));
