//문제
// anagram의 의미 : 같은 글자(character)로 구성된 서로 다른 문자열(string) 말한다.
// ex) cinema & iceman

//입력받은 문자열 2개가 anagram인지 아닌지를 판별하시오
//anagram 일 경우 true, 그렇지 않으면 false를 리턴하시오.

//모두 소문자만 들어온다고 가정한다.

function anagrams(str1, str2) {
	const obj1 = checkCharater(str1);
	const obj2 = checkCharater(str2);
	let isAnagram = true;

	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		isAnagram = false;
		return isAnagram;
	} else {
		for (let prop in obj1) {
			if (obj1[prop] !== obj2[prop]) {
				isAnagram = false;
				return isAnagram;
			}
		}
	}

	return isAnagram;
}

function checkCharater(str) {
	const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
	const obj = {};

	const newStr = str
		.split('')
		.filter((char) => ALPHABET.includes(char))
		.join('');

	for (let i = 0; i < newStr.length; i++) {
		if (!obj[newStr[i]]) {
			obj[newStr[i]] = 1;
		} else {
			obj[newStr[i]]++;
		}
	}

	return obj;
}

console.log(anagrams('hello world', 'world hello'));
console.log(anagrams('hellow world', 'hello there'));
console.log(anagrams('hellow world', 'hello there!'));
