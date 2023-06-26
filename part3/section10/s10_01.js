// 재귀를 이용한 방법... 큰수가 너무 느림...😒 / 메모이제이션을 해도 느린듯...
// → Top-Down (Memoization 방식) - 재귀 사용
// n이 위에서부터 천천히 내려온다
function solution1(n) {
  const memo = [];

  const rc = (n) => {
    if (memo[n]) return memo[n];
    if (n === 1) return 1;
    if (n === 2) return 2;

    return (memo[n] = solution(n - 1) + solution(n - 2));
  };

  return rc(n);
}

// console.log(solution1(7)); // 21
// console.log(solution1(30)); // 1346269
// console.log(solution1(40)); // 165580141
// console.log(solution1(45)); // 1836311903

// → Bottom-Up (Tabulation 방식) - 반복문 사용
// Tabulation : 도표/표 라는 의미
// n이 1부터 차례대로 올라간다!
function solution2(n) {
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(solution2(7)); // 21
console.log(solution2(30)); // 1346269
console.log(solution2(40)); // 165580141
console.log(solution2(45)); //1836311903
