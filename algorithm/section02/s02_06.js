function solution(array) {
  const sums = [];
  let sum = 0;
  //행
  for (let i = 0; i < array.length; i++) {
    sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[i][j];
    }
    sums.push(sum);
  }
  //열
  for (let i = 0; i < array.length; i++) {
    sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[j][i];
    }
    sums.push(sum);
  }

  //대각선
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i][i];
  }
  sums.push(sum);

  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i][array.length - 1 - i];
  }
  sums.push(sum);

  return Math.max(...sums);
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
