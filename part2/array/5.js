/*
#4번 문제와 유사한 접근의 문제
→ BUT 나에게 좀 더 어렵게 느껴졌다.

*/

function solution1(target, nums) {
  let lIndex = 0,
    rIndex = 0,
    sum = nums[0],
    lengthCount = 1;

  const results = [];
  while (rIndex < nums.length) {
    if (sum < target) {
      rIndex++;
      sum += nums[rIndex];
      lengthCount++;
    } else {
      results.push(lengthCount);
      sum -= nums[lIndex];
      lIndex++;
      lengthCount--;
    }
  }

  if (results.length === 0) return 0;
  return Math.min(...results);
}

console.log(solution1(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(solution1(4, [1, 4, 4])); // 1
console.log(solution1(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
console.log(solution1(11, [1, 2, 3, 4, 5])); // 3
console.log(solution1(7, [3, 4, 2, 1, 3, 2])); // 2

/*
self feedback

리트코드에 제출했던 코드가 잘못되었다고 해서 몇 시간 동안 고민했다...
결과는 문제를 정확히 읽지 못했다.

which the sum is greater than or equal to target
"타겟보다 크거나 같다"!!!
→ 타겟과 같은 부분만 고려하고 있었으니 당연히 답이 나올리가...

아래 풀이는 처음 푼 풀이인데, 잘못된 풀이 기념으로 남긴다.
*/

// 처음 푼 풀이  : ❌ 오류 풀이
function solution2(target, nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  if (sum < target) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return 1;
  }

  // ✅ 이 부분에서 잘못됨. left와 sum에서 뺀 것과의 대칭을 생각했는데, 사실 서브배열의 시작점이 항상 for문에 의존적이다.
  const mins = [];
  let left = 0;
  let right = sum;
  for (let i = 0; i < nums.length; i++) {
    left += nums[i];
    if (left >= target) mins.push(i + 1);
    right -= nums[i];
    if (right >= target) mins.push(nums.length - i - 1);
  }

  return Math.min(...mins);
}

console.log(solution2(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(solution2(4, [1, 4, 4])); // 1
console.log(solution2(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
console.log(solution2(11, [1, 2, 3, 4, 5])); // 3
console.log(solution2(7, [3, 4, 2, 1, 3, 2])); // 2
console.log(solution2(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8])); //2 → 반례
