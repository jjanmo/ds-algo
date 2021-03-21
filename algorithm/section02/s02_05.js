function solution(studunts, scores) {
  const array = [...scores].sort((a, b) => b - a);
  console.log(array);
  const result = [];
  for (let i = 0; i < scores.length; i++) {
    // [87, 92, 92, 100, 92]
    for (let j = 0; j < array.length; j++) {
      // [ 100, 92, 92, 92, 87 ]
      if (scores[i] === array[j]) result.push(j + 1);
    }
  }
  console.log(result.join(' '));
}

// solution(5, [87, 89, 92, 100, 76]);
solution(5, [87, 92, 92, 100, 92]);
