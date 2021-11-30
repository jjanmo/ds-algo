function solution1(n, distances, costs) {
  let totalD = 0;
  let result = 0;
  let lowest = costs[0];
  for (let i = 0; i < costs.length - 1; i++) {
    if (costs[i] < lowest) lowest = costs[i];
  }

  for (let i = 0; i < distances.length; i++) {
    totalD += distances[i];
  }

  for (let i = 0; i < costs.length - 1; i++) {
    if (lowest === costs[i]) {
      result += totalD * costs[i];
      totalD = 0;
      break;
    } else {
      result += costs[i] * distances[i];
      totalD -= distances[i];
    }
  }

  return result;
}

// console.log(solution1(4, [2, 3, 1], [5, 2, 4, 1])); // 18
// console.log(solution1(2, [3], [4, 2])); // 12
// console.log(solution1(2, [1, 2, 3], [1, 2, 3, 4])); // 6

/*
solution1로 풀게되면 task1 밖에 통과를 못해서 부분점수밖에 얻지 못했다.

1. 정수의 범위가 int형 밖이라 BigInt를 사용해야했다.
2. 그럼에도 위 방법으로는 문제점을 task2/3이 해결되지 않았다.  → solution2
*/

function solution2(n, distances, costs) {
  let total = 0;
  let currentCost = costs[0];

  for (let i = 0; i < costs.length - 1; i++) {
    total += distances[i] * currentCost; // 최소비용
    if (currentCost > costs[i + 1]) currentCost = costs[i + 1];
  }

  return total;
}

console.log(solution2(4, [2, 3, 1], [5, 2, 4, 1])); // 18
console.log(solution2(2, [3], [4, 2])); // 12
console.log(solution2(2, [1, 2, 3], [1, 2, 3, 4])); // 6
