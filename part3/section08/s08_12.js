function solution1(n, r) {
  const dfs = (n, r) => {
    if (n === r || r === 0) return 1;

    return dfs(n - 1, r) + dfs(n - 1, r - 1);
  };

  return dfs(n, r);
}

console.log(solution1(5, 3)); // 10
console.log(solution1(33, 19)); // 818809200 → 위 풀이로는 시간이 너무 많이 걸림!!
