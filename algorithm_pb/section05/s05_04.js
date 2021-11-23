function solution1(array, total) {
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

console.log(solution1([1, 3, 1, 2, 3], 5)); // 10

function solution2(array, total) {
  let left = 0,
    right = 0,
    sum = array[0],
    count = 0;

  while (right < array.length) {
    if (sum < total) {
      count++;
      right++;
      sum += array[right];
    } else {
      while (left < right) {
        if (sum === total) count++;
        left++;
        sum -= array[left];
        count++;
      }
    }
  }

  return count;
}

console.log(solution2([1, 3, 1, 2, 3], 5)); // 10
