function solution(numbers) {
  // 1)
  const set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        set.add(numbers[i] + numbers[j]);
      }
    }
  }
  return [...set].sort((a, b) => a - b);

  // 2)
  
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); // [2,5,7,9,12]
