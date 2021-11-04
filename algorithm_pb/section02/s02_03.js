function solution(A, B) {
  const results = [];
  for (let i = 0; i < A.length; i++) {
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

  return results.join(' ');
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
