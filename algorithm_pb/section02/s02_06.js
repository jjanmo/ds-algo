function solution1(array) {
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
  solution1([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);

function solution2(array) {
  let result = Number.MIN_SAFE_INTEGER;
  let sum1 = 0; //행 합 or 대각선1
  let sum2 = 0; //열 합 or 대각선2

  // 행 & 열 합
  for (let i = 0; i < array.length; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < array[i].length; j++) {
      sum1 += array[i][j];
      sum2 += array[j][i];
    }
    result = Math.max(result, sum1, sum2);
  }

  // 대각선의 합
  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < array.length; i++) {
    sum1 += array[i][i];
    sum2 += array[i][array.length - i - 1];
  }
  result = Math.max(result, sum1, sum2);

  return result;
}

console.log(
  solution2([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
