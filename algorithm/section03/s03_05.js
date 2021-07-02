function solution(string) {
  let count = 1;
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      result += string[i] + (count === 1 ? '' : count);
      count = 0;
    }
    count++;
  }

  return result;
}

console.log(solution('KKHSSSSSSSE'));
console.log(solution('AAAABBCDCDAABCCC'));
