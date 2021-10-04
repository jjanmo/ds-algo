function solution(total, list) {
  const newList = list;
  newList.sort((a, b) => a[0] - b[0]);

  let sum = 0;
  let count = 0;
  for (let i = 0; i < newList.length; i++) {
    const pSum = newList[i][0] + newList[i][1];
    sum += pSum;
    if (sum === total) {
      return count++;
    } else if (sum < total) {
      count++;
    } else {
    }
  }

  console.log(sum);
}

console.log(
  solution(28, [
    [6, 6], // 12
    [2, 2], // 4
    [4, 3], // 7
    [4, 5], // 9
    [10, 3], // 13
  ])
);

// [ [상품가격, 배송비], [], [] ]
