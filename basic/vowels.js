//문제
// 주어진 문자열에서 모음의 개수를 구하시오

function countVowels(str) {
	const VOWELS = 'aeiou';
	const newStr = str.toLowerCase();
	let count = 0;
	for (let i = 0; i < newStr.length; i++) {
		if (VOWELS.includes(newStr[i])) {
			count++;
		}
	}

	return count;
}

console.log(countVowels('hello world'));
console.log(countVowels('Given a string of words or phrases, count the number of vowels.'));
