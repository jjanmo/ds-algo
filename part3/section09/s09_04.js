function solution(n) {
  const result = [];
  const queue = [];
  queue.push(1);

  while (queue.length !== 0) {
    const shifted = queue.shift(); // 큐에서 하나 나옴
    result.push(shifted);
    if (2 * shifted + 1 > n) continue;
    queue.push(2 * shifted, 2 * shifted + 1); // 방금 나온 요소와 가장 가까운, 연결된 노드들을 푸쉬
  }

  console.log(result.join(' '));
}

solution(7);
