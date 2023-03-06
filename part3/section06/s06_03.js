// 2차원 배열(board)를 어떻게 이해할 것인가?!
/*
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
→ 이거 자체가 board의 모습임!! ✅

내가 이해한 보드 ❌
board[0] → 보드 가장 왼쪽의 세로열을 말한다고 생각함! 
*/

function solution(board, moves) {
  const LENGTH = board.length;
  const result = [];
  let count = 0;

  moves.forEach((move) => {
    for (let i = 0; i < LENGTH; i++) {
      if (board[i][move - 1] !== 0) {
        if (isSame(board[i][move - 1], result)) {
          count += 2;
          result.pop();
        } else {
          result.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return count;
}

function isSame(value, result) {
  return result.at(-1) === value;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
