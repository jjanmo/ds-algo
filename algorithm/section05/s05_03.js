function solution(array, total) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      sum += array[j];
      if (sum > total) break;
      else if (sum === total) {
        count++;
        break;
      }
    }
  }

  console.log(count);
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 3)); // 4
