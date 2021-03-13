function solution1(a, b, c) {
  return Math.min(a, b, c);
}

function solution2(a, b, c) {
  if (a > b) {
    if (b > c) {
      return c;
    } else {
      return b;
    }
  } else {
    if (a > c) {
      return c;
    } else {
      return a;
    }
  }
}

console.log(solution1(6, 5, 11));
console.log(solution2(6, 5, 11));
