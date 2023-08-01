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

// console.log(solution1(5, 14)); // 3
// console.log(solution1(8, 3)); // 5

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

// BFS
function review(s, e) {
  const checked = [s]; // 주의! 초기값 설정 해놓아야함
  const queue = [];
  const jumps = [-1, 1, 5];

  queue.push({
    value: s,
    count: 0,
  });
  let tcount = 0;

  while (queue.length !== 0) {
    tcount++;
    const shifted = queue.shift();
    const { value, count } = shifted;

    for (const jump of jumps) {
      const next = value + jump;
      if (next === e) return count + 1;

      if (!checked.includes(next)) {
        checked.push(next);
        queue.push({
          value: next,
          count: count + 1,
        });
      }
    }
  }
}

console.log(review(5, 14)); // 3
console.log(review(8, 3)); // 5

// TODO
// DFS로 접근해보자!!
