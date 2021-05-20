function solution1(string) {
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE = 'abcdefghijklmmopqrstuvwxyz';

  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (UPPERCASE.includes(string[i])) {
      const index = UPPERCASE.indexOf(string[i]);
      newStr += LOWERCASE[index];
    } else {
      const index = LOWERCASE.indexOf(string[i]);
      newStr += UPPERCASE[index];
    }
  }

  return newStr;
}

// 처음엔 포맷팅이 익숙해져서 위의 풀이처럼 풀었다. 하지만 include, indexOf는 내부적으로 순회를 하는 것으로 알고 있다.
// 즉 유사 이중for문이 된다는 것! 그렇기때문에 아래와 같이 푸는 것이 좀 더 명시적이고 깔끔한 것 같다.

function solution2(string) {
  let result = '';
  for (let c of string) {
    if (c === c.toUpperCase()) {
      result += c.toLowerCase();
    } else {
      result += c.toUpperCase();
    }
  }

  return result;
}

console.log(solution1('StuDY'));
console.log(solution2('StuDY'));
