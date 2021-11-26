function solution(s) {
  const splitedMinus = s.split('-');
  let sum = addAll(splitedMinus[0]);

  for (let i = 1; i < splitedMinus.length; i++) {
    sum -= addAll(splitedMinus[i]);
  }

  return sum;
}

function addAll(s) {
  const splitedPlus = s.split('+');
  let sum = 0;
  splitedPlus.forEach((strNum) => (sum += Number(strNum)));

  return sum;
}

console.log(solution('55-50+40')); // -35
console.log(solution('10+20+30+40')); // 100
console.log(solution('00009-00009')); // 0
