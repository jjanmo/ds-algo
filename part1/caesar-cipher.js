//문제
/*
Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
*/

//solution 1
function caesarCipher(str, count) {
	const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';

	const realMoveCount = count % 26;
	let newStr = '';

	for (let i = 0; i < str.length; i++) {
		if (count > 0) {
			//양수
			if (UPPER_CASE.includes(str[i])) {
				const curPos = UPPER_CASE.indexOf(str[i]);
				if (curPos + realMoveCount > 25) {
					const _tmp = curPos + realMoveCount - 26;
					newStr += UPPER_CASE[_tmp];
				} else {
					newStr += UPPER_CASE[curPos + realMoveCount];
				}
			} else if (LOWER_CASE.includes(str[i])) {
				const curPos = LOWER_CASE.indexOf(str[i]);
				if (curPos + realMoveCount > 25) {
					const _tmp = curPos + realMoveCount - 26;
					newStr += LOWER_CASE[_tmp];
				} else {
					newStr += LOWER_CASE[curPos + realMoveCount];
				}
			} else {
				newStr += str[i];
			}
		} else {
			//음수
			if (UPPER_CASE.includes(str[i])) {
				const curPos = UPPER_CASE.indexOf(str[i]);
				if (curPos + realMoveCount < 0) {
					const _tmp = 26 + (curPos + realMoveCount);
					newStr += UPPER_CASE[_tmp];
				} else {
					newStr += UPPER_CASE[curPos + realMoveCount];
				}
			} else if (LOWER_CASE.includes(str[i])) {
				const curPos = LOWER_CASE.indexOf(str[i]);
				if (curPos + realMoveCount < 0) {
					const _tmp = 26 + (curPos + realMoveCount);
					newStr += LOWER_CASE[_tmp];
				} else {
					newStr += LOWER_CASE[curPos + realMoveCount];
				}
			} else {
				newStr += str[i];
			}
		}
	}

	return newStr;
}

console.log('solution1');
console.log(caesarCipher('I love JavaScript!', 100));
//E hkra FwrwOynelp!
console.log(caesarCipher('I love JavaScript!', -100));
//M pszi NezeWgvmtx!

//solution 2
function _caesarCipher(str, count) {
	const APHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const MOVE_COUNT = count % 26;
	const newStr = str.toLowerCase();
	let result = '';

	for (let i = 0; i < newStr.length; i++) {
		if (APHABET.includes(newStr[i])) {
			let index = APHABET.indexOf(newStr[i]) + MOVE_COUNT;
			if (index > 25) index = index - 26;
			if (index < 0) index = 26 + index;
			result += APHABET.includes(str[i]) ? APHABET[index] : APHABET[index].toUpperCase();
		} else {
			result += newStr[i];
		}
	}

	return result;
}

console.log('solution2');
console.log(_caesarCipher('I love JavaScript!', 100));
//E hkra FwrwOynelp!
console.log(_caesarCipher('I love JavaScript!', -100));
//M pszi NezeWgvmtx!
