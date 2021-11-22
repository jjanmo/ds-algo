function solution1(s, cost) {
  let maxCost, char;
  let costSum = 0;
  for (let i = 0; i < s.length; i++) {
    if (char === s[i]) {
      if (maxCost > cost[i]) {
        costSum += cost[i];
      } else {
        costSum += maxCost;
        maxCost = cost[i];
      }
    } else {
      char = s[i];
      maxCost = cost[i];
    }
  }

  return costSum;
}

console.log(solution1('abaac', [1, 2, 3, 4, 5])); // 3
console.log(solution1('abc', [1, 2, 3])); // 0
console.log(solution1('aabaa', [1, 2, 3, 4, 1])); // 2
