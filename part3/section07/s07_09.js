function solution(n, array) {
  array.sort((a, b) => a[1] - b[1]);

  let endTime = Number.MIN_SAFE_INTEGER;
  let count = 1;
  let result = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i][0] < endTime) {
      count++;
    } else {
      endTime = array[i][1];
      if (result < count) result = count;
      count = 1;
    }
  }

  return result;
}
console.log(
  solution(5, [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
); // 2
console.log(
  solution(5, [
    [1, 2],
    [12, 15],
    [14, 15],
    [1, 3],
    [1, 4],
  ])
); // 3
