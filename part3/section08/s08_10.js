// n개 중에서 m개를 뽑는 경우의 수
function solution(n, m, array) {
  const visited = Array.from({ length: n }, (_) => false);
  const tmp = Array.from({ length: m });
  const result = [];
  let count = 0;

  const dfs = (level) => {
    if (level === m) {
      // 종료
      count++;
      result.push([...tmp]);
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      tmp[level] = array[i];
      dfs(level + 1);

      // Q. 아래 두 코드의 의미는??
      visited[i] = false;
      tmp.pop();
    }
  };

  dfs(0);
  console.log(result, count);
}

solution(3, 2, [3, 6, 9]); // 6
solution(4, 2, [1, 3, 6, 9]); // 12
