// 9-1번 문제와 동일
// 단, "인접리스트" 로 접근

// 비교
// 이전 문제 : 이차원 행렬을 통해서 해당 노드간의 관계를 파악 → n의 개수가 늘어나면 시간복잡도가 올라가서 효율이 떨어짐
// ✅ n이 많아질 때는 "인접리스트" 방법을 통해서 접근해야함
function solution(n, arr) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const checked = [, 1];
  const tmp = [1]; // 체크용
  let count = 0;

  for (const [s, e] of arr) {
    graph[s].push(e);
  }

  const dfs = (l) => {
    if (l === n) {
      count++;
      console.log(tmp.join(' ')); // 체크용
      return;
    }
    for (let i = 0; i < graph[l].length; i++) {
      const node = graph[l][i];
      if (!checked[node]) {
        checked[node] = 1;
        tmp.push(node);
        dfs(node);
        checked[node] = 0;
        tmp.pop();
      }
    }
  };

  dfs(1);

  console.log(count);
  return count;
}

solution(5, [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
]);
