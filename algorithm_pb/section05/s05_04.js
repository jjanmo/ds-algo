function solution(array, total) {
  let count = 0;
  // 1개 짜리
  for (let value of array) {
    if (total >= value) count++;
  }

  // 2개 이상
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    for (let j = i; array.length; j++) {
      sum += array[j];
      if (sum > total) break;
      else {
        count++;
      }
    }
  }

  return count;
}

console.log(solution([1, 3, 1, 2, 3], 5));
