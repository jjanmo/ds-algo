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

const result1 = getPrimeNumber1();
console.log(result1);

//방법2 : 완전탐색 + 범위 줄이기
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

const result2 = getPrimeNumber2();
console.log(result2);

//방법3 : 에라토스테네스의 체
