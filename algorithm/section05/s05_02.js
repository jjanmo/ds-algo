function solution(arr1, arr2) {
  const common = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        common.push(arr1[i]);
        break;
      }
    }
  }

  return common.sort((a, b) => a - b);
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
console.log(solution([1, 3, 9, 5, 2, 11, 24], [3, 2, 10, 12]));
