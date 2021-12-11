function solution1(N, cards) {
  cards.sort((a, b) => a - b);

  const twoSums = [];
  let tSum = cards[0];
  for (let i = 1; i < cards.length; i++) {
    const tmp = tSum + cards[i];
    twoSums.push(tmp);
    tSum = tmp;
  }

  return twoSums.reduce((acc, cur) => acc + cur, 0);
}
console.log(solution1(3, [10, 20, 40])); // 100
console.log(solution1(5, [10, 10, 10, 10, 10])); // 140
console.log(solution1(5, [40, 110, 120, 130, 140])); // 1230

// solution1 잘못 이해한 풀이

function solution2(N, cards) {
  cards.sort((a, b) => a - b);

  const twoSums = [];
  while (true) {
    const tmp = cards[0] + cards[1];
    twoSums.push(tmp);

    cards.splice(0, 2);
    if (cards.length === 0) break;
    cards.push(tmp);
    cards.sort((a, b) => a - b);
  }

  return twoSums.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution2(3, [10, 20, 40])); // 100
console.log(solution2(5, [10, 10, 10, 10, 10])); // 140
console.log(solution2(5, [40, 110, 120, 130, 140])); // 1230

// solution2 메모리 초과
// → 힙 (최소힙)을 사용해서 한다던데... 꼭 이 방식 밖에 없을까...
