function solution(s) {
  let sum = 0;
  let count = 0;
  let index = 1;

  while (sum < s) {
    sum += index;
    count++;
    index++;
  }

  if (sum === s) return count;
  else return count - 1;
}

console.log(solution(200));
