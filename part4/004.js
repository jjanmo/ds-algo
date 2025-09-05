/**
 * @origin 프로그래머스 문제 "모의고사"
 * @input [1,2,3,4,5], [1,3,2,4,2]
 * @output [1], 1,2,3]
 */

function solution(answers) {
  const checked = { 1: 0, 2: 0, 3: 0 };
  const solution1 = [1, 2, 3, 4, 5];
  const solution2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const solution3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === solution1[i % solution1.length]) checked[1]++;
    if (answers[i] === solution2[i % solution1.length]) checked[2]++;
    if (answers[i] === solution3[i % solution1.length]) checked[3]++;
  }

  const sorted = Object.entries(checked).toSorted((a, b) => { // 프로그래머스에선 toSorted 사용못함 > sort를 사용해야함
    if (a[1] === b[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  const result = [];
  for (let i = 0; i < sorted.length; i++) {
    result.push(Number(sorted[i][0]));
    if (sorted[i][1] !== sorted[i + 1]?.[1]) break;
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([[1, 3, 2, 4, 2]]));
