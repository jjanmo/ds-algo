function solution(order, mySubjects) {
  let prev = -1;
  for (let i = 0; i < order.length; i++) {
    const tmp = mySubjects.indexOf(order[i]);
    if (tmp < prev) return 'NO';
    else {
      prev = tmp;
    }
  }

  return prev === -1 ? 'NO' : 'YES';
}

console.log(solution('CBA', 'CBDAGE')); // YES
console.log(solution('CBA', 'FGCDAB')); // NO
console.log(solution('AFC', 'AFFDCCFF')); // YES
console.log(solution('ABC', 'EFGHIKD')); // NO

// queue를 이용한 풀이
function solution2(need, plan) {
  let needQueue = need;
  for (let i = 0; i < plan.length; i++) {
    if (needQueue.includes(plan[i])) {
      if (needQueue[0] !== plan[i]) return 'NO';
      else needQueue = needQueue.slice(1);
    }
  }

  if (needQueue.length === 0) return 'YES';
  else return 'NO';
}

console.log(solution2('CBA', 'CBDAGE')); // YES
console.log(solution2('CBA', 'FGCDAB')); // NO
console.log(solution2('AFC', 'AFFDCCFF')); // YES
console.log(solution2('ABC', 'EFGHIKD')); // NO
