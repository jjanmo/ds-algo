//문제
//숫자를 입력받고  1부터 입력받은 숫자까지의 각각에 대해서 어떤 결과값을 출력한다. 숫자가 2로 나누어 떨어지면
//"Fizz", 3으로 나누어 떨어지면 "Buzz", 2와 3으로 모두 나누어 떨어지면 "Fizz Buzz"를 출력하시오.

function fizzBuzz(number) {
	const results = [];
	for (let i = 1; i <= number; i++) {
		if (i % 2 === 0 && i % 3 === 0) {
			//i % 6 === 0 도 가능
			results.push('Fizz Buzz');
		} else if (i % 2 === 0) {
			results.push('Fizz');
		} else if (i % 3 === 0) {
			results.push('Buzz');
		} else {
			results.push(i);
		}
	}
	console.log(results);
	results.forEach((result) => console.log(result));
}

fizzBuzz(30);
