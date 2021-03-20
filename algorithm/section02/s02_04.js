function solution(problems, answers) {
  let score = 0;
  let count = 0;
  for (let i = 0; i < problems; i++) {
    if (answers[i] === 0) {
      count = 0;
    } else {
      count++;
      score += count;
    }
  }

  console.log(score);
}

solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
