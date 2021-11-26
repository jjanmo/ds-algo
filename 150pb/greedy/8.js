function solution(n, data) {
  data.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    const tip = data[i] - i;
    if (tip < 0) break;
    else sum += tip;
  }

  return sum;
}

console.log(solution(4, [3, 3, 3, 3])); // 6
console.log(solution(3, [3, 2, 3])); // 5
console.log(solution(5, [7, 8, 6, 9, 10])); // 30
console.log(solution(5, [1, 1, 1, 1, 2])); // 2
console.log(solution(3, [1, 2, 3])); // 4
