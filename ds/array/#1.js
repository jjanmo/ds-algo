/*
해당 문제는 기본적인 배열의 탐색, 즉 for문을 사용해서 풀면된다.
하지만 문제의 요구 조건은 O(logN)인 시간 복잡도를 가진 해결책으로 풀어라 이다.
그렇기 때문에 해당 문제는 이진 탐색을 통해서 해결해야만 한다.
즉 이진 탐색을 구현할 수 있는가를 물어보는 문제. 아주 쉽지만 기본적인 문제이다. 반드시 알고 구현할 수 있어야만 하겠다.
*/

function solution(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor(nums.length / 2);

  while (left <= right) {
    if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

console.log(solution([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(solution([-1, 0, 3, 5, 9, 12], 2)); // -1
