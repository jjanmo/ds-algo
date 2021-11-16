function solution(n) {
  if (n == 1) return n;

  return `${solution(n - 1)} ${n}`;
}

console.log(solution(3));
console.log(solution(10));
