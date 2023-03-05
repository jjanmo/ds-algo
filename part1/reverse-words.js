//문제
//Given a phrase, reverse the order of the characters of each word.
//문자열이 주어지고, 각 문자열에서 단어별로 뒤집으시오

function reverseWord(str) {
	const strArray = str.split(' ');
	const newArray = [];
	for (let i = 0; i < strArray.length; i++) {
		let _str = '';
		for (let j = 0; j < strArray[i].length; j++) {
			_str = strArray[i][j] + _str;
		}
		newArray.push(_str);
	}

	return newArray.join(' ');
}

console.log(reverseWord('I love JavaScript!'));
