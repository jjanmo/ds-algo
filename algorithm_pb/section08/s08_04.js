/*
1 ~ n 까지의 집합의 부분집합을 구하시오
*/
// DFS
function solution(n) {
  const checked = []; // 인덱스 0에는 아무것도 존재하지 않음

  const dfs = (v) => {
    if (v === n + 1) {
      const result = log(checked);
      console.log(result);
    } else {
      checked[v] = 1;
      dfs(v + 1);
      checked[v] = 0;
      dfs(v + 1);
    }
  };

  dfs(1);
}

function log(arr) {
  return arr.reduce((acc, cur, index) => {
    if (index === 0) return acc;
    else if (cur === 1) return acc + ' ' + index;
    else if (cur === 0) return acc;
  }, '');
}

solution(3);

/*
OUPUT
1 2 3
1 2
1 3
1
2 3
2
3
*/
