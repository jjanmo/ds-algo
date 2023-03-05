function solution(answers) {
  let score = 0;
  let count = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === 0) {
      count = 0;
    } else {
      count++;
      score += count;
    }
  }

  return score;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
