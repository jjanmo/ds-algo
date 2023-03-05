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
