function solution(a, b, c) {
  const longest = Math.max(a, b, c);
  let result;

  if (a === longest) result = a <= b + c;
  else if (b === longest) result = b <= a + c;
  else result = c <= a + b;

  return result ? 'YES' : 'NO';
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
