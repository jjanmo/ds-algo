function solution(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let boxCount = 0;
  let total = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    boxCount += boxTypes[i][0];
    if (truckSize - boxCount > 0) {
      total += boxTypes[i][0] * boxTypes[i][1];
    } else if (truckSize - boxCount < 0) {
      const diff = boxCount - truckSize;
      total += (boxTypes[i][0] - diff) * boxTypes[i][1];
      return total;
    } else {
      total += boxTypes[i][0] * boxTypes[i][1];
      return total;
    }
  }

  return total;
}

console.log(
  solution(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
); // 8
console.log(
  solution(
    [
      [1, 3],
      [5, 5],
      [2, 5],
      [4, 2],
      [4, 1],
      [3, 1],
      [2, 2],
      [1, 3],
      [2, 5],
      [3, 2],
    ],
    35
  )
); // 76
