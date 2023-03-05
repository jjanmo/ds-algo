//문제) 수를 입력받아 소수(prime number)인지 여부를 리턴하시오.

//일반적인 방식:완전탐색
function isPrime1(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}
	return true;
}

console.log(isPrime1(30));
console.log(isPrime1(127));
console.log(isPrime1(797));

//문제) 1 ~ 1000사이에서 몇 개의 소수가 존재하는지 그 개수를 구하시오.

//방법1 : 완전탐색
console.time('sol1-timer');
function getPrimeNumber1() {
	let primeCount = 0;
	for (let i = 1; i <= 1000; i++) {
		let _count = 0;
		for (let j = 1; j <= i; j++) {
			if (i % j === 0) _count++;
		}
		if (_count === 2) {
			primeCount++;
		}
	}

	return primeCount;
}

console.log('sol1', getPrimeNumber1());
console.timeEnd('sol1-timer');

//방법2 : 완전탐색 + 범위 줄이기
console.time('sol2-timer');
function getPrimeNumber2() {
	let primeNumber = 0;
	for (let i = 2; i <= 1000; i++) {
		let isPrime = true;
		const sqrt = Math.floor(Math.sqrt(i));
		for (let j = 2; j <= sqrt; j++) {
			if (i % j === 0) isPrime = false;
		}
		if (isPrime) primeNumber++;
	}

	return primeNumber;
}

console.log('sol2', getPrimeNumber2());
console.timeEnd('sol2-timer');

//방법3 : 에라토스테네스의 체
console.time('sol3-timer');
function getPrimeNumber3() {
	const array = Array.from({ length: 1001 }, (v, i) => i); //1000개짜리 배열 생성(0~1000)

	//주의!!
	//index 0  1 | 2  3
	//elem  0  1 | 2  3
	//1은 무조건 제외 /
	//index가 1부터 시작하면 판별할 수가 없음(1씩증가하면서 확인하기 때문)

	for (let i = 2; i < array.length; i++) {
		for (let j = i + i; j < array.length; j += i) {
			if (array[j] === 0) continue;
			else {
				array[j] = 0;
			}
		}
	}
	return array.filter((num) => num).length - 1; //1제외
}

console.log('sol3', getPrimeNumber3());
console.timeEnd('sol3-timer');
