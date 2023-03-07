function solution(order, mySubjects) {
  let prev = -1;
  for (let i = 0; i < order.length; i++) {
    const tmp = mySubjects.indexOf(order[i]);
    if (tmp < prev) return 'NO';
    else {
      prev = tmp;
    }
  }

  return 'YES';
}

console.log(solution('CBA', 'CBDAGE')); // YES
console.log(solution('CBA', 'FGCDAB')); // NO
console.log(solution('AFC', 'AFFDCCFF')); // YES
