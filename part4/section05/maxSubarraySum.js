/**
 * @param {number[]} arr 배열
 * @param {number} n 연속된 수
 * @description 배열에서의 연속된 수들 중에서 가장 큰 수를 리턴하는 함수
 */
function maxSubarraySum(arr, n) {
  if (arr.length === 0) return null;
  let first = 0;
  let second = 1;
  let sum = 0;

  while (second < arr.length) {
    if (second - first === n - 1) {
      sum = Math.max(
        arr.slice(first, second + 1).reduce((acc, cur) => acc + cur, 0),
        sum
      );
      second++;
    } else if (second - first > n - 1) {
      first++;
    } else {
      second++;
    }
  }
  return sum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

console.log('----');

function maxSubarraySum2(arr, n) {
  if (arr.length === 0) return null;
  let first = 0,
    second = 0;
  let sum = arr[first];
  let max = sum;

  while (second < arr.length) {
    if (second - first === n - 1) {
      max = Math.max(max, sum);
      second++;
      sum += arr[second];
    } else if (second - first > n - 1) {
      sum -= arr[first];
      first++;
    } else {
      second++;
      sum += arr[second];
    }
  }
  return max;
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum2([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum2([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum2([], 4)); // null
