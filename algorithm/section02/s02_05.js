function solution(scores) {
  // const array = [...scores].sort((a, b) => b - a);
  // console.log(array);
  // const result = [];
  // for (let i = 0; i < scores.length; i++) { //같은 것이 있는지 없는지를 판단해야함
  //   // [87, 92, 92, 100, 92]
  //   for (let j = 0; j < array.length; j++) {
  //     // [ 100, 92, 92, 92, 87 ]
  //     if (scores[i] === array[j]) {
  //       array[j] = -1;
  //       result.push(j + 1);
  //     }
  //   }
  // }
  // console.log(result.join(' '));

  const sortedArray = [...scores].sort((a, b) => b - a);
  const ranks = [];
  const previousIndexes = [];
  let rank = 0;
  console.log(sortedArray);
  for (let i = 0; i < sortedArray.length; i++) {
    let index;
    if (sortedArray[i - 1] !== sortedArray[i]) {
      rank++;
      index = scores.indexOf(sortedArray[i]);
    } else {
      while (previousIndexes.indexOf(sortedArray[i]) !== -1) {
        index = scores.indexOf(sortedArray[i], index + 1);
      }
    }
    console.log(sortedArray[i], index);
    ranks[index] = rank;
  }

  return ranks.join(' ');
}

console.log(solution([87, 89, 92, 100, 76])); // 4 3 2 1 5
console.log(solution([87, 92, 92, 100, 92])); // 5 2 2 1 2
