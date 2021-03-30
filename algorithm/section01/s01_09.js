function solution1(string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    newStr += string[i] === 'A' ? '#' : string[i];
  }
  return newStr;
}

// 정규표현식을 이용한 풀이
function solution2(string) {
  return string.replace(/A/g, '#');
}

console.log(solution1('BANANA'));
console.log(solution2('BANANA'));
