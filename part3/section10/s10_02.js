function solution(n) {
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n + 1];
}

console.log(solution(7));

/**
 * 🔥 문제 주의!! : 문제 좀 더 세밀하게 읽기!!
 * 최종답 : 돌다리를 "건너는" 경우 → 앞선 문제와 다르게 n+1가 되어야 돌다리를 건너게 되는 것!
 */
