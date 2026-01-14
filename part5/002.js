/**
 * @description 배열의 중복값을 제거하고 내림차순으로 정렬한 배열 만들기
 * @input [4,2,2,1,3,4]
 * @output [4,3,2,1]
 * @constraints
 */

function solution(nums) {
  // 1)
  // const set = new Set(nums);
  // const sorted = [...set].sort((a, b) => b - a);
  // return sorted;

  // 2)
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) result.push(nums[i]);
  }

  return result.sort((a, b) => b - a);
}

console.log(solution([4, 2, 2, 1, 3, 4]));
