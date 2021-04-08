function solution1(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) count++;
  }

  return count;
}

function solution2(string, char) {
  return string.split(char).length - 1;
}

console.log(solution1('COMPUTERPROGRAMMING', 'R'));
console.log(solution1('COMPUTERPROGRAMMINGRR', 'R'));

console.log(solution2('COMPUTERPROGRAMMING', 'R'));
console.log(solution2('COMPUTERPROGRAMMINGRR', 'R'));
