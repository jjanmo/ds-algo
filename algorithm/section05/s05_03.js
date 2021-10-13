function solution1(array, total) {
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

  return count;
}

function solution2(array, total) {
  let p1 = 0,
    count = 0,
    sum = 0;
  let p2 = p1 + 1;

  while (p1 !== array.length) {
    if (sum === total) {
      count++;
      p1++;
      p2 = p1 + 1;
      sum = 0;
    } else if (sum > total) {
      p1++;
      p2 = p1 + 1;
      sum = 0;
    } else {
      if (p2 < array.length) {
        sum += array[p2];
        p2++;
      } else {
        p1++;
        p2 = p1 + 1;
        sum = 0;
      }
    }
  }

  return count;
}

console.log(solution1([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
console.log(solution1([1, 2, 1, 3, 1, 1, 1, 2], 3)); // 4

console.log(solution2([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
console.log(solution2([1, 2, 1, 3, 1, 1, 1, 2], 3)); // 4
