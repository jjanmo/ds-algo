function solution1(scores) {
  const sortedArray = [...scores].sort((a, b) => b - a); // 점수 내림차순 정렬
  const ranks = [];
  let rank = 0;
  let index;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i - 1] === sortedArray[i]) {
      index = scores.indexOf(sortedArray[i], index + 1);
    } else {
      //달라질 때
      rank = i + 1;
      index = scores.indexOf(sortedArray[i]);
    }
    ranks[index] = rank;
  }

  return ranks.join(' ');
}

console.log(solution1([87, 89, 92, 100, 76])); // 4 3 2 1 5
console.log(solution1([87, 92, 92, 100, 92])); // 5 2 2 1 2
console.log(solution1([87, 92, 87, 100, 92])); // 4 2 4 1 2
console.log(solution1([92, 92, 92, 100, 76])); // 2 2 2 1 5

console.log('--------------');
// 이중for문을 통해서 모두 비교해준다
function solution2(scores) {
  const ranks = [];
  for (let i = 0; i < scores.length; i++) {
    let rank = 1;
    for (let j = 0; j < scores.length; j++) {
      if (scores[i] < scores[j]) rank++;
    }
    ranks.push(rank);
  }

  return ranks.join(' ');
}

console.log(solution2([87, 89, 92, 100, 76])); // 4 3 2 1 5
console.log(solution2([87, 92, 92, 100, 92])); // 5 2 2 1 2
console.log(solution2([87, 92, 87, 100, 92])); // 4 2 4 1 2
console.log(solution2([92, 92, 92, 100, 76])); // 2 2 2 1 5
