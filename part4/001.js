/**
 * @description 정수 배열을 정렬해서 반환하는 함수
 * @input [1,-5,2,4,3]
 * @output [-5,1,2,3,4]
 * @constraints 배열의 개수 2 < X < 10^5
 */

function solution(nums) {
  // 1)
  // return nums.sort((a, b) => a - b);

  // 2)
  return nums.toSorted((a, b) => a - b);
}

console.log(solution([1, -5, 2, 4, 3]));
