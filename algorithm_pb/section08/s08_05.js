function solution1(arr) {
  const result = []; // 각 부분집합의 합
  const max = arr.length;
  const TOTAL = sum(arr);
  let answer = 'NO';

  const dfs = (n) => {
    if (n === max) {
      const part = sum(result);
      if (TOTAL - part === part) {
        return (answer = 'YES');
      }
    } else {
      result[n] = arr[n];
      dfs(n + 1);
      result[n] = 0;
      dfs(n + 1);
    }
  };
  dfs(0);

  return answer;
}

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution1([1, 3, 5, 6, 7, 10]));

function solution2(arr) {
  const MAX = arr.length;
  const TOTAL = sum(arr);
  let answer = 'NO';

  const dfs = (n, sum) => {
    if (n === MAX) {
      if (TOTAL - sum === sum) {
        return (answer = 'YES');
      }
    } else {
      // sum += arr[n];
      // dfs(n + 1, sum);
      // sum -= arr[n];
      // dfs(n + 1, sum);
      // → 굳이 위에 처럼 쓸 필요 없음 : 함수의 인자로 들어갈 때(재귀를 돌면서) 계산됨(평가가 이루어짐)

      dfs(n + 1, sum + arr[n]);
      dfs(n + 1, sum);
    }
  };

  dfs(0, 0);

  return answer;
}

console.log(solution2([1, 3, 5, 6, 7, 10]));
