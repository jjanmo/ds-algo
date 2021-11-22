function solution1(s) {
  let fChar = s[0];
  let count1 = 0,
    count2 = 0;
  let splitedCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (fChar === s[i]) {
      count1++;
    } else {
      count2++;
    }

    if (count2 && count1 === count2) {
      splitedCount++;
      count1 = 0;
      count2 = 0;
    }
  }

  return splitedCount;
}

console.log(solution1('RLRRLLRLRL')); // 4
console.log(solution1('RLLLLRRRLR')); // 3
console.log(solution1('LLLLRRRR')); // 1
console.log(solution1('RLRRRLLRLL')); // 2

/*
self feedback

글자 수가 바뀔 때 마다 카운팅하여 각 카운팅할 때 마다 이것이 해당 조건에 맞는지(balaced string)를 확인하고
맞다면 결과값을 올려주는 식으로 구현하였다.
매번 카운팅할 때 마다 맞는지를 확인하는 것이 부분에서의 최적의 해를 구하고(각 단계에서의 최적의 해) 이를 바탕으로 전체적인 최적의 해를 구하기 때문에
이 문제가 그리디 알고리즘에 분류에 있는 것 같다.
(나의 해석...😅)

*/
