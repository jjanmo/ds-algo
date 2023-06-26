function solution(node, arr) {
  const graph = Array.from({ length: node + 1 }, () =>
    Array.from({ length: node + 1 }, () => 0)
  );

  // 그래프를 2차원배열로서 표현하는 것! r → c로 이동하는 것으로서 가능하면 1, 불가능하면 0으로 표시한다!
  // → 이렇게 표시하는 방법 : "인접행렬" 이라고함!
  for (let [r, c] of arr) {
    graph[r][c] = 1;
  }

  let count = 0;
  const checked = [, 1]; // 이 코드 대신, "for문을 2" 부터 순회하도록해도됨, 어차피 시작점 1은 무조건 들어가는 것이기 때문에!
  const tmp = [1];
  const dfs = (cur) => {
    if (cur === node) {
      console.log(tmp); // 체크용
      count++;
      return;
    }

    // 노드간의 이동 방향 : cur → i 로 이동하는 것을 의미함!
    for (let i = 1; i <= node; i++) {
      if (!checked[i] && graph[cur][i]) {
        checked[i] = 1;
        tmp.push(i);
        dfs(i);
        checked[i] = 0;
        tmp.pop();
      }
    }
  };

  dfs(1);
  console.log(count);
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
