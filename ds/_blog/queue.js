/*

input : 양수 n을 입력받는다
output :  1 ~ n 까지의 이진수로 구해서 반환한다. 반환값은 이진수 문자열을 담은 배열

example)
input : n = 3
output : ["1","10","11"]

*/

function solution1(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const binary = generateBinary(i + 1);
    result.push(binary);
  }

  return result;
}

function generateBinary(n) {
  let binary = '';
  while (n !== 0) {
    const div = n % 2;
    binary = div + binary;
    n = Math.floor(n / 2);
  }

  return binary;
}

console.log(solution1(3));
console.log(solution1(19));

// solution1의 경우 뭔가 queue 자료구조와는 전혀 상관없이 풀이 한 것 같다...😰
