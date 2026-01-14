/**
 * @description 프로그래머스 문제 "실패율"
 */

function solution(N, stages) {
  const failureRates = [];

  const counts = Array.from({ length: N }).fill(0);
  stages.forEach((currentStage) => {
    if (currentStage - 1 >= N) return;
    counts[currentStage - 1]++;
  });

  let total = stages.length;
  counts.forEach((count, index) => {
    failureRates.push([index + 1, count / total]);
    total -= count;
  });

  return failureRates
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return b[1] - a[1];
    })
    .map(([stage]) => stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); //[4,1,2,3]
