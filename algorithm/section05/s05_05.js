function solution(array, k) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += array[j];
    }
    if (sum > max) max = sum;
  }

  return max;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56
