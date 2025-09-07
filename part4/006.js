/**
 * @description 프로그래머스 문제 "실패율"
 */

function solution(N, stages) {
  const failureRate = {};

  let total = stages.length;
  for (let i = 1; i <= N; i++) {
    let count = 0;
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) count++;
    }
    failureRate[i] = count / total;
    total = total - count;
    count = 0;
  }

  const sorted = Object.entries(failureRate).sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  return sorted.map((item) => Number(item[0]));
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); //[4,1,2,3]
