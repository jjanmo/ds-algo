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

console.log('----');

/**
 * Refactor: Sliding Window 방법을 잘 활용하는 방법
 */
function maxSubarraySum3(arr, n) {
  if (arr.length === 0) return null;

  let tmpSum = arr.slice(0, n).reduce((acc, cur) => acc + cur, 0);
  let maxSum = tmpSum;

  for (let i = n; i < arr.length; i++) {
    tmpSum = tmpSum + arr[i] - arr[i - n]; // n(윈도우)을 횔용한 1개 더하고(뒤에 있는 요소) 1개 빼는 방식(앞에 있는 요소)
    maxSum = Math.max(maxSum, tmpSum);
  }
  return maxSum;
}

console.log(maxSubarraySum3([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum3([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum3([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum3([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum3([], 4)); // null
