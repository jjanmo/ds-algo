//주어진 숫자를 거꾸로 출력하시오

//1234 => 4321
//-1200 => -21

function reverseNumber(number) {
	const numberStr = String(number);
	let newNumberStr = '';
	let isFirstZero = true;

	for (let i = numberStr.length - 1; i >= 0; i--) {
		if (numberStr[i] === '-') {
			newNumberStr = '-' + newNumberStr;
			return newNumberStr;
		} else if (numberStr[i] !== '0') {
			//0 아닌 경우
			isFirstZero = false;
			newNumberStr += numberStr[i];
		} else {
			//0인 경우
			if (!isFirstZero) {
				//첫번째 0이 아닌 경우
				newNumberStr += numberStr[i];
			}
		}
	}

	return Number(newNumberStr);
}

console.log(reverseNumber(1234));
console.log(reverseNumber(-1200));
console.log(reverseNumber(14200300));
