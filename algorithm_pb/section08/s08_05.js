function solution1(arr) {
  const totals = []; // 모든 합을 넣는 배열
  const result = []; // 각 부분집합의 합
  const max = arr.length;
  let answer = 'NO';

  const dfs = (n) => {
    if (n === max) {
      const total = sum(result);
      if (totals.includes(total)) {
        answer = 'YES';
        return answer;
      } else totals.push(total);
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
