/**
 * @origin 프로그래머스 문제 "모의고사"
 * @input [1,2,3,4,5], [1,3,2,4,2]
 * @output [1], 1,2,3]
 */

function solution1(answers) {
  const checked = { 1: 0, 2: 0, 3: 0 };
  const solution1 = [1, 2, 3, 4, 5];
  const solution2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const solution3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === solution1[i % solution1.length]) checked[1]++;
    if (answers[i] === solution2[i % solution2.length]) checked[2]++;
    if (answers[i] === solution3[i % solution3.length]) checked[3]++;
  }

  const sorted = Object.entries(checked).sort((a, b) => {
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

// 카운팅이 개선된 풀이
function solution2(answers) {
  const scores = [0, 0, 0];
  const solution1 = [1, 2, 3, 4, 5];
  const solution2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const solution3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === solution1[i % solution1.length]) scores[0]++;
    if (answers[i] === solution2[i % solution2.length]) scores[1]++;
    if (answers[i] === solution3[i % solution3.length]) scores[2]++;
  }

  // 구하고자 하는 것은 가장 많이 맞춘 사람 > 1번 풀이처럼 sort를 할 필요없이 가장 큰 점수를 알면 됨
  const maxScore = Math.max(...scores);

  const result = [];
  for (let i = 0; i < scores.length; i++) {
    if (maxScore === scores[i]) result.push(i + 1);
  }

  return result;
}

console.log('solution1', solution1([1, 2, 3, 4, 5]));
console.log('solution1', solution1([[1, 3, 2, 4, 2]]));
console.log('solution2', solution2([1, 2, 3, 4, 5]));
console.log('solution2', solution2([[1, 3, 2, 4, 2]]));
