function solution1(string) {
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (UPPERCASE.includes(string[i])) count++;
  }

  return count;
}

function solution2(string) {
  let count = 0;
  for (let char of string) {
    if (char === char.toUpperCase()) count++;
  }

  return count;
}

// ASCII Code를 이용한 풀이 : WIL 참고
function solution3(string) {
  let count = 0;
  for (let char of string) {
    const intedChar = char.charCodeAt(0); // 아스키 코드(10진수)로 변환된 숫자
    if (intedChar >= 65 && intedChar <= 90) count++;
  }

  return count;
}

console.log(solution1('KoreaTimeGood'));
console.log(solution2('KoreaTimeGood'));
console.log(solution3('KoreaTimeGood'));
