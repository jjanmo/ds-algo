function solution(array) {
  const primes = [];
  const reversedArray = array.map((ele) => Number((ele + '').split('').reverse().join(''))); // 이 부분을 좀 더 명료하게 고치고 싶다. 너무 체인닝러스하게 구현 😱

  for (let i = 0; i < reversedArray.length; i++) {
    // 소수인지 파악하는 부분 : 이외에도 2가지 방법이 더 존재 :  반 나눠서 반복 / 에라토스테네스의 체
    let count = 0;
    for (let j = 1; j < reversedArray[i]; j++) {
      if (reversedArray[i] % j === 0) count++;
    }
    if (count === 1) primes.push(reversedArray[i]);
  }

  return primes.join(' ');
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
