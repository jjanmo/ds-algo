function solution1(s, e) {
  const queue = [];
  const jump = [1, -1, 5];

  queue.push({
    count: 0,
    pos: s,
  });

  while (queue.length !== 0) {
    const shifted = queue.shift();
    // if (shifted.pos === e) return shifted.count; // 1)
    for (let j of jump) {
      if (shifted.pos === e) return shifted.count + 1; // 2) 1번보다 2번(여기)에서 체크해주는 것이 덜 순회하는 경우!
      queue.push({
        pos: shifted.pos + j,
        count: shifted.count + 1,
      });
    }
    // console.log(queue);
  }
}

console.log(solution1(5, 14)); // 3
console.log(solution1(8, 3)); // 5

// 업그레이드 풀이!
function solution2(s, e) {
  const checked = []; // 인덱스 : 위치 / 값 : 카운트 수
  const queue = [];
  const jump = [1, -1, 5];

  queue.push(s);
  checked[s] = 1; // 1을 더하고 시작 (0과 그외 숫자 구분을 위해서)

  while (queue.length !== 0) {
    const shifted = queue.shift();
    for (const j of jump) {
      const np = shifted + j;
      if (np === e) return checked[shifted];
      // 왔던 경우의 수 중복 방지!
      if (checked[np] === 0) {
        queue.push(np);
        checked[np] = checked[shifted] + 1;
      }
    }
  }
}

// console.log(solution1(5, 14)); // 3
// console.log(solution1(8, 3)); // 5

//----

function review(s, e) {
  const jumps = [-1, 1, 5];
  const result = [];

  const dfs = (total, count) => {
    if (total > e || total < 0) return;
    if (total === e) {
      result.push(count);
      console.log(result);
      return;
    }

    for (const jump of jumps) {
      total += jump;
      count++;
      dfs(total, count);
    }
  };

  dfs(s, 0);
}

review(5, 14);
review(8, 3);
