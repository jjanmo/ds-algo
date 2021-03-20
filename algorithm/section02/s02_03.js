function solution(game, A, B) {
  const results = [];
  for (let i = 0; i < game; i++) {
    if (A[i] === 1 && B[i] === 3) {
      results.push('A');
    } else if (A[i] === 3 && B[i] === 1) {
      results.push('B');
    } else if (A[i] > B[i]) {
      results.push('A');
    } else if (A[i] < B[i]) {
      results.push('B');
    } else {
      results.push('D');
    }
  }

  console.log(results.join(' '));
}

solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
