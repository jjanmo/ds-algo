function solution1(n, arr) {
  arr.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= n) {
      sum -= arr[i];
      return sum;
    }
  }
}

console.log(solution1(259, [81, 58, 42, 33, 61])); // 242
console.log(solution1(10, [5, 3, 2, 1])); // 해당 풀이의 오류!! 8 👎 → 9 👍

function solution2(t, arr) {
  const MAX = arr.length;
  const results = [];

  const dfs = (n, total) => {
    if (n === MAX) {
      results.push(total);
      return;
    } else {
      dfs(n + 1, total - arr[n]);
      dfs(n + 1, total);
    }
  };

  dfs(0, t);

  let min = Number.MAX_VALUE;
  for (let i = 0; i < results.length; i++) {
    if (results[i] > 0 && min > results[i]) {
      min = results[i];
    }
  }

  return t - min;
}

console.log(solution2(259, [81, 58, 42, 33, 61])); // 242
console.log(solution2(10, [5, 3, 2, 1])); // 9
