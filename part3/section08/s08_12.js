function solution1(n, r) {
  const dfs = (n, r) => {
    if (n === r || r === 0) return 1;

    return dfs(n - 1, r) + dfs(n - 1, r - 1);
  };

  return dfs(n, r);
}

// console.log(solution1(5, 3)); // 10
// console.log(solution1(33, 19)); // 818809200 → 위 풀이로는 시간이 너무 많이 걸림!!

// 메모이제이션 활용!
function solution2(n, r) {
  const memo = Array.from({ length: n + 1 }, () => [
    ...Array.from({ length: r + 1 }, () => 0),
  ]);

  const dfs = (n, r) => {
    if (memo[n][r]) return memo[n][r];
    if (n === r || r === 0) return 1;

    const tmp = dfs(n - 1, r) + dfs(n - 1, r - 1);
    memo[n][r] = tmp;
    return tmp;
  };

  return dfs(n, r);
}

// console.log(solution2(5, 3)); // 10
// console.log(solution2(33, 19)); // 818809200

//---

function review(n, r) {
  const memo = {}; // memoization을 이용한 효율성 업!!

  const dfs = (n, r) => {
    // ✅ r === 1 인 경우는 빼야함 ex. 3C1 → 3이 나와야함!
    if (memo[`${n}-${r}`]) return memo[`${n}-${r}`];
    if (n === r || r === 0) {
      return 1;
    }

    return (memo[`${n}-${r}`] = dfs(n - 1, r - 1) + dfs(n - 1, r));
  };

  return dfs(n, r);
}

console.log(review(5, 3)); // 10
console.log(review(33, 19)); // 818809200
