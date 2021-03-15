function solution1(a, b, c, d, e, f, g) {
  const min = Math.min(a, b, c, d, e, f, g);

  return min;
}

function solution2(a, b, c, d, e, f, g) {
  const arr = [a, b, c, d, e, f, g];
  arr.sort((a, b) => a - b);

  return arr[0];
}

console.log(solution1(5, 3, 7, 11, 2, 15, 17));
console.log(solution2(5, 3, 7, 11, 2, 15, 17));
