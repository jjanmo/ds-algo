/**
 * 이 문제는 파스칼의 삼각형에 대해서 알면 좀 더 쉽게 이해할 수 있는 문제 + 사실상 파스칼의 삼각형에서 알려진 내용을 이용해서 푸는 문제이긴함!
 */

function getCombination(n, r) {
  if (n === r || r === 0) return 1;

  return getCombination(n - 1, r) + getCombination(n - 1, r - 1);
}

function solution(n, k) {
  const cValues = []; // 파스칼의 삼각형에서 나오는 내용으로서 맨 끝에 있는 값에 "특정 상수"를 곱하여 모두 합하면 꼭대기값을 구할 수 있다. 특정 상수의 규칙이 조합수를 나타냄
  for (let i = 0; i < n; i++) {
    cValues[i] = getCombination(n - 1, i);
  }

  const result = [];
  const tmp = [];
  const checked = [];
  let answer = '';

  const dfs = (sum) => {
    if (answer) return;
    if (tmp.length === n) result.push([...tmp]); // 체크용
    if (tmp.length === n && sum === k) {
      answer = tmp.join(' ');
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!checked[i]) {
        checked[i] = 1;
        tmp.push(i);
        dfs(sum + i * cValues[tmp.length - 1]);
        checked[i] = 0;
        tmp.pop();
      }
    }
  };

  dfs(0);

  console.log(result); // 체크용
  return answer;
}

console.log(solution(4, 16));
