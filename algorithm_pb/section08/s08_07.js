// L : 제한시간
// arr : [ [점수, 푸는데 걸리는 시간] ... ]
function solution1(L, arr) {
  const MAX = arr.length;
  let maxScore = Number.MIN_SAFE_INTEGER;

  const dfs = (n, time, score) => {
    if (time > L) return;
    if (n === MAX) {
      maxScore = Math.max(score, maxScore);
    } else {
      dfs(n + 1, time + arr[n][1], score + arr[n][0]);
      dfs(n + 1, time, score);
    }
  };

  dfs(0, 0, 0);
  return maxScore;
}

console.log(
  solution1(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
