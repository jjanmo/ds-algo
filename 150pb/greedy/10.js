function solution(n, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  const sum = A.reduce((acc, cur, index) => {
    return acc + cur * B[index];
  }, 0);

  console.log(sum);
}

console.log(solution(5, [1, 1, 1, 6, 0], [2, 7, 8, 3, 1])); // 18
console.log(solution(3, [1, 1, 3], [10, 30, 20])); // 80
console.log(solution(9, [5, 15, 100, 31, 39, 0, 0, 3, 26], [11, 12, 13, 2, 3, 4, 5, 9, 1])); // 528
