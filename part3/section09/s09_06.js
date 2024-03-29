// DFS 풀이
function solution1(graph) {
  const direction = [
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
  ];
  let count = 0;

  const dfs = (x, y) => {
    for (const [dx, dy] of direction) {
      if (graph[x + dx]?.[y + dy] === 1) {
        graph[x + dx][y + dy] = 0;
        dfs(x + dx, y + dy);
      }
    }
  };

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
}

// solution1([
//   [1, 1, 0, 0, 0, 1, 0],
//   [0, 1, 1, 0, 1, 1, 0],
//   [0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 1, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 1, 0, 0],
//   [1, 0, 1, 0, 1, 0, 0],
// ]);

/*
✅ 나의 실수
dfs함수를 기존처럼 돌다보면 결국 1개의 섬에서 끝나게 된다. 

  graph[x + dx][y + dy] = 0;
  dfs(x + dx, y + dy);
  graph[x + dx][y + dy] = 1;

요런식으로 접근하면,,,
그리고 재귀에서 종료조건이 딱히 필요없는게,
0으로 바뀌게 되면 결국 조건(0인 경우만 순회하도록하는 조건)에서 걸려서 멈추게 된다.
즉, DFS의 시작점을 순회하는 코드가 필요하다. 어느 포인트에서 섬이 시작할지 모르기때문에!
(즉, dfs(0,0) 으로 시작점을 찍고 dfs() 함수를 돌면 1개의 섬만 탐색할 수 밖에 없음)

그래서 2중for문으로 순회를 할 수 밖에 없다... 😓 
*/

// BFS 풀이
function solution2(graph) {
  const direction = [
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
  ];
  const queue = [];
  let count = 0;

  const bfs = (x, y) => {
    queue.push([x, y]);
    graph[x][y] = 0;

    while (queue.length !== 0) {
      const [sx, sy] = queue.shift();
      for (const [dx, dy] of direction) {
        if (graph[sx + dx]?.[sy + dy] === 1) {
          queue.push([sx + dx, sy + dy]);
          graph[sx + dx][sy + dy] = 0;
        }
      }
    }
    count++;
  };

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (graph[i][j] === 1) {
        bfs(i, j);
      }
    }
  }

  console.log(count);
}

// solution2([
//   [1, 1, 0, 0, 0, 1, 0],
//   [0, 1, 1, 0, 1, 1, 0],
//   [0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 1, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 1, 0, 0],
//   [1, 0, 1, 0, 1, 0, 0],
// ]);

// DFS도 BFS와 전반적인 코드 구조는 비슷하다. 단지, 큐를 사용하고, 탐색하는 순서가 다르다는 점!

//----

// 오류 풀이!!
// 처음 들어가는 좌표가 0으로 바뀌지 못해서 더 많이 재귀를 돌게됨!
function review1(n, graph) {
  const direction = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];
  let count = 0;

  const dfs = (x, y) => {
    if (graph[x]?.[y] === 0) return;

    for (const [dx, dy] of direction) {
      const nx = x + dx;
      const ny = y + dy;
      if (graph[nx]?.[ny] === 1) {
        graph[nx][ny] = 0;
        dfs(nx, ny);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        count++;
        dfs(i, j);
      }
    }
  }

  console.log(count, graph); // graph가 모두 0으로 바뀌어야하는데 로그를 보면 그렇지 못함!
  return count;
}

review1(7, [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
]); // 5

// review1 오류 수정
function review2(n, graph) {
  const direction = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];
  let count = 0;

  // 시작점 초기화를 어떻게 처리 해야할까?
  // dfs 함수에서 0인 좌표를 골라내는 조건문이 존재! 첫번째로 들어가는 좌표의 경우 해당 좌표를 0,0으로 변경을 못시킴.
  // 그런데, for문을 돌때 이미 0이 아닌 좌표만 재귀를 걸고 있기 때문에 굳이 초기 조건(0인 좌표)이 필요가 없음.

  const dfs = (x, y) => {
    for (const [dx, dy] of direction) {
      const nx = x + dx;
      const ny = y + dy;

      if (graph[nx]?.[ny] === 1) {
        graph[nx][ny] = 0;
        dfs(nx, ny);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        count++;
        graph[i][j] = 0;
        dfs(i, j);
      }
    }
  }

  console.log(count);
  return count;
}

review2(7, [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
]); // 5
