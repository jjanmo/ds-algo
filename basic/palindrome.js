//Palindrome이란 회문을 말한다. 그렇다면 회문은 앞에서부터 읽거나 뒤에서부터 읽어도 항상 똑같은 것을 말한다.
//문자열을 입력받고 회문이면 true를 회문이 아니면 false를 리턴한다.

//이 문제의 포인트는 반드시 문자열에서 문자만 존재하는지 여부를 확인을 해줘야한다는 점!!

//sol1)
function isPalindrome(str) {
	const forwardArray = str
		.toLowerCase()
		.split('')
		.filter((char) => char.match(/^[a-zA-Z]*$/));
	const backwardArray = forwardArray.slice().reverse();

	// console.log(backwardArray, backwardArray);
	for (let i = 0; i < forwardArray.length; i++) {
		if (forwardArray[i] !== backwardArray[i]) return false;
	}
	return true;
}

//word
console.log(isPalindrome('bob'));
console.log(isPalindrome('follow'));

//phrase
console.log(isPalindrome('Cigar? Toss it in a can. It is so tragic'));
console.log(isPalindrome('sit ad est love'));

console.log('-------------------------------');

//sol2) replace를 이용
function _isPalindrome(str) {
	const newStr = str.toLowerCase().replace(/\W/g, '');
	const reverseStr = newStr.split('').reverse().join('');

	return newStr === reverseStr;
}

//word
console.log(_isPalindrome('bob'));
console.log(_isPalindrome('follow'));

//phrase
console.log(_isPalindrome('Cigar? Toss it in a can. It is so tragic'));
console.log(_isPalindrome('sit ad est love'));

console.log('-------------------------------');

//sol3) formatting
function __isPalindrome(str) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';

	const newStrArray = str
		.toLowerCase()
		.split('')
		.reduce((newStr, char) => (alphabet.includes(char) ? newStr.concat(char) : newStr), []);
	const reverseArray = newStrArray.slice().reverse();

	return newStrArray.join('') === reverseArray.join('');
}

//word
console.log(__isPalindrome('bob'));
console.log(__isPalindrome('follow'));

//phrase
console.log(__isPalindrome('Cigar? Toss it in a can. It is so tragic'));
console.log(__isPalindrome('sit ad est love'));
