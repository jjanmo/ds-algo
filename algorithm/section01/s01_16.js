function solution1(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (!newString.includes(string[i])) newString += string[i];
  }

  return newString;
}

function solution2(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (newString.indexOf(string[i]) === -1) {
      newString += string[i];
    }
  }

  return newString;
}

console.log(solution1('ksekkset'));
console.log(solution2('ksekkset'));

//추가 변형 문제
//주어진 문자열에서 특정문자(k)의 개수를 찾는 방법
//=> 위 문제는 아래 코드와 다르게 풀 수 있다. 하지만 여기서 indexOf의 사용에 포인트를 맞추었다.

function solution3(string, find) {
  //( 전체 문자열, 찾고자 하는 문자 )
  let count = 0;
  let pos = string.indexOf(find);

  while (pos !== -1) {
    count++;
    pos = string.indexOf(find, pos + 1);
  }

  return count;
}

console.log(solution3('ksekkset', 'k'));
console.log(solution3('javascript session storage', 's'));
