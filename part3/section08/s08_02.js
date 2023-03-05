function solution(n) {
  if (n === 0) return '';

  return `${solution(Math.floor(n / 2))}${n % 2}`;
}

console.log(solution(11));
console.log(solution(20));
