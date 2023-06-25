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

// console.log(
//   solution1(20, [
//     [10, 5],
//     [25, 12],
//     [15, 8],
//     [6, 3],
//     [7, 4],
//   ])
// ); // 41

// ---

function review1(limit, problems) {
  let maxScore = Number.MIN_SAFE_INTEGER;

  const dfs = (i, score, time) => {
    if (i === problems.length) {
      if (time <= limit && maxScore < score) maxScore = score;
      return;
    }

    const [s, t] = problems[i];
    dfs(i + 1, score + s, time + t);
    dfs(i + 1, score, time);
  };

  dfs(0, 0, 0);

  console.log(maxScore);
  return maxScore;
}

review1(20, [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]); // 제한시간, 문제s → [[점수, 걸리는 시간]...]
