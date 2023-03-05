function solution(array) {
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let peaks = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let count = 0;
      for (let k = 0; k < direction.length; k++) {
        if (
          i + direction[k][0] < 0 ||
          j + direction[k][1] < 0 ||
          i + direction[k][0] === array.length ||
          j + direction[k][1] === array.length
        ) {
          count++;
          continue;
        }
        if (array[i + direction[k][0]][j + direction[k][1]] < array[i][j]) count++;
      }
      if (count === 4) peaks++;
    }
  }

  return peaks;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
); // 10
