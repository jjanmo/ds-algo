/**
 * 문제 이해 부족!!🔥 + DP 문제에 대한 접근 부족
 */

function solution(array) {
  const dp = []; // dp[i] 의미 : 배열의 i번째 요소가 마지막 요소인 최대 증가 수열의 개수 🌟

  for (let i = 0; i < array.length; i++) {
    const tmp = [];
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j]) tmp.push(dp[j]);
    }
    const max = tmp.length !== 0 ? Math.max(...tmp) : 0;
    dp[i] = max + 1;
    console.log(dp);
  }

  return Math.max(...dp);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4
