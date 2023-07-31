function solution(nums, edges, k) {
  const timeMap = {};
  const array = [];
  for (const edge of edges) {
    const [start, end, time] = edge;
    if (!array[start]) array[start] = [];
    array[start].push(end);

    timeMap[`${start}-${end}`] = time;
  }

  const dfs = (l, totalTime, totalScore) => {
    if (totalTime > k) return;
    if (totalTime !== 0 && l === 0) {
    }

    const row = array[l];
    for (let i = 0; i < row.length; i++) {}
  };

  dfs(0, 0, 0);

  console.log(timeMap, array);
}

solution(
  [5, 25, 10, 30],
  [
    [0, 1, 11],
    [1, 2, 15],
    [0, 3, 12],
  ],
  47
); // 60
solution(
  [7, 20, 5, 30],
  [
    [0, 1, 11],
    [1, 2, 12],
    [2, 3, 15],
    [1, 3, 17],
  ],
  53
); // 32
