function solution1(n, arr) {
  arr.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= n) {
      sum -= arr[i];
      return sum;
    }
  }
}

// console.log(solution1(259, [81, 58, 42, 33, 61])); // 242
// console.log(solution1(10, [5, 3, 2, 1])); // 해당 풀이의 오류!! 8 👎 → 9 👍
// 위 풀이는 항상 배열 안에서 순서에 맞는 합만 나올 수 있음 ex. 81,58,61의 합 같은 경우는 계산할 수 없음, 마찬가지로 두번째 예시처럼 5,3,1의 합이 9인데 이 경우 수는 계산할 수 없음

function solution2(t, arr) {
  const MAX = arr.length;
  const results = [];

  const dfs = (n, total) => {
    if (total <= 0) return; // 제한 조건!
    if (n === MAX) {
      results.push(total);
      return;
    } else {
      dfs(n + 1, total - arr[n]);
      dfs(n + 1, total);
    }
  };

  dfs(0, t);

  let min = Number.MAX_VALUE;
  for (let i = 0; i < results.length; i++) {
    if (min > results[i]) {
      min = results[i];
    }
  }

  return t - min;
}

// console.log(solution2(259, [81, 58, 42, 33, 61])); // 242
// console.log(solution2(10, [5, 3, 2, 1])); // 9

// 기존 S08-05번 문제처럼 푸는 것도 가능
// dfs 안의 if(n === MAX) 조건에서 더한 값을 비교해준다.
// 1) 제한값을 넘어가면 return  2) 제한값을 넘어가지 않는 값 중에서 최대값을 구한다.

//---

function review1(k, arr) {
  const totals = [];

  const dfs = (i, s) => {
    if (i === arr.length) {
      totals.push(s);
      return;
    }

    dfs(i + 1, s + arr[i]);
    dfs(i + 1, s);
  };

  dfs(0, 0);

  const sorted = totals.sort((a, b) => b - a);
  for (const num of sorted) {
    if (num < k) return num;
  }
}

console.log(review1(259, [81, 58, 42, 33, 61])); // 242
console.log(review1(10, [5, 3, 2, 1])); // 9
