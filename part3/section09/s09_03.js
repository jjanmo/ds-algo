function solution(array) {
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; // ✅ 첫번째 포인트!!
  const end = array.length - 1;
  let count = 0;

  const dfs = (x, y) => {
    if (x === end && y === end) {
      count++;
      return;
    }

    for (const [dx, dy] of direction) {
      if (array[x + dx]?.[y + dy] === 0) {
        array[x + dx][y + dy] = 1; // ✅ 두번째 포인트 : 이게 없으면 무한루프에 빠짐! → max call stack
        dfs(x + dx, y + dy);
        array[x + dx][y + dy] = 0;
      }
    }
  };

  array[0][0] = 1; // ✅ 세번째 포인트 : 시작점은 1로 체크해야 다시 돌아왔을 때 점검하지 않는다! (end point가 생김!)
  dfs(0, 0);
  console.log(count);
}

solution([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
]);
