function solution(n, target, array) {
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;
  let mid;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (target > array[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
console.log(solution(8, 32, [23, 87, 65, 12, 57, 32, 99, 81])); // 3

// 다시 풀기
function solution2(find, array) {
  const sorted = array.sort((a, b) => a - b);
  let start = 0;
  let end = array.length;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (find === sorted[mid]) return mid + 1;
    else if (find < sorted[mid]) end = mid;
    else start = mid;
  }

  return -1;
}

console.log(solution2(32, [23, 87, 65, 12, 57, 32, 99, 81]));
