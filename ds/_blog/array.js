/*
문제 : Remove all even integers from an array

배열 안에 모든 짝수를 제거하시오

input : [1,2,4,5,10,6,3]
ouput : [1,5,3]
*/

function solution1(array) {
  return array.filter((num) => num % 2);
}
/*
참고
나머지 연산으로 인해 짝수는 0 → 0은 falsy → 배열에서 제거
                홀수는 0이 아닌 값 → truthy → 배열에 포함

좀 더 직관적인 코드
num % 2 !== 0
*/

console.log(solution1([1, 2, 4, 5, 10, 6, 3]));
console.log(solution1([3, 2, 41, 3, 34]));

function solution2(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) result.push(array[i]);
  }

  return result;
}

console.log(solution2([1, 2, 4, 5, 10, 6, 3]));
console.log(solution2([3, 2, 41, 3, 34]));
