/**
 * @description 2차원 행렬 arr1, arr2 를 입력받아 곱한 결과를 반환하는 함수
 * @input  arr1 : [[1,4],[3,2],[4,1]] / arr2 : [[3,3],[3,3]]
 * @output  [[15,15],[15,15],[15,15]]
 * @constraints
 */

function solution(arr1, arr2) {
  const matrix = [];
  // i : arr1 row 의 변경
  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    // j : arr2 col의 변경
    for (let j = 0; j < arr1[i].length; j++) {
      let result = 0;
      // k : arr1 col과 arr2 row의 움직임
      for (let k = 0; k < arr2.length; k++) {
        result += arr1[i][k] * arr2[k][j];
      }
      row.push(result);
    }
    matrix.push(row);
  }
  return matrix;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
