function solution(list, k) {
  const sumList = [];
  for (let i = 0; i < list.length - 2; i++) {
    for (let j = i + 1; j < list.length - 1; j++) {
      for (let k = j + 1; k < list.length; k++) {
        sumList.push(list[i] + list[j] + list[k]);
      }
    }
  }
  const result = [...new Set(sumList)].sort((a, b) => b - a)[k - 1];

  return result;
}

console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3)); // 143
console.log(solution([1, 2, 3, 4], 3)); // 7
