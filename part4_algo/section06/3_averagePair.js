/** 다시 풀어보기! */
function averagePair(arr, avg) {
  if (arr.length === 0) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === avg * 2) return true;
    if (sum < avg * 2) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
console.log(averagePair([1, 2, 3, 4, 5], 3)); // true
