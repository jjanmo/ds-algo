/**
 * @description 배열 안에 2개의 수를 뽑아서 만들수 있는 모든 수를 오름차순으로 리턴하는 함수
 * @input [2,1,3,4,1]
 * @output [2,3,4,5,6,7]
 * @constraints
 */

function solution(numbers) {
  const set = new Set();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const added = numbers[i] + numbers[j];
      set.add(added);
    }
  }
  return [...set].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
