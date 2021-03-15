function solution(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i + 1;
  }

  return sum;
}

console.log(solution(6));
console.log(solution(10));
