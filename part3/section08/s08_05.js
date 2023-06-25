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

// console.log(solution1([1, 3, 5, 6, 7, 10]));

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

// console.log(solution2([1, 3, 5, 6, 7, 10]));

//---

function review1(n, arr) {
  const checked = Array.from({ length: n }, () => 0);
  let answer = 'NO';

  const dfs = (i) => {
    if (i === n) {
      const { a, b } = checked.reduce(
        (acc, cur, idx) => {
          if (cur) return { ...acc, t1: acc['t1'] + arr[idx] };
          else return { ...acc, t2: acc['t2'] + arr[idx] };
        },
        { t1: 0, t2: 0 }
      );

      if (a === b) answer = 'YES';
      return;
    }

    checked[i] = 1;
    dfs(i + 1);
    checked[i] = 0;
    dfs(i + 1);
  };

  dfs(0);

  return answer;
}

console.log(review1(6, [1, 3, 5, 6, 7, 10]));

// 부분집합의 합을 재귀를 돌면서 구하자! 재귀 역시 반복의 일종! 🌟
