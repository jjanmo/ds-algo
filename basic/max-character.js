//문제
//주어진 문자열 안에서 가장 많이 나온 문자를 찾아서 리턴하시오
//같은 개수를 가진 문자가 여러 개일 경우 처음 나온 문자를 반환하시오
//현재 상태는 대소문자 구분이 되는 상태이다

//+여기에 조건이 좀 더 붙을 수도 있다.

function findMaxCharacter(str) {
	const characterCountsObj = {};
	let maxCount = 0;
	let maxCharacter = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i] === ' ') continue;
		if (!characterCountsObj[str[i]]) {
			characterCountsObj[str[i]] = 1;
		} else {
			characterCountsObj[str[i]]++;
		}

		if (maxCount < characterCountsObj[str[i]]) {
			maxCount = characterCountsObj[str[i]];
			maxCharacter = str[i];
		}
	}

	return maxCharacter;
}

console.log(findMaxCharacter('Hello world'));
console.log(findMaxCharacter('Though we use two separate loops that iterate through two different inputs'));
