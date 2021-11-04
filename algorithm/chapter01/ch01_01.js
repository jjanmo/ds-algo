/*
순차검색
문제 : 원소가 n개인 배열 S에 원소 x가 존재하는지
입력 : 배열 S(배열 안의 원소는 모두 다른 수), x(찾고자 하는 수)
출력 : x가 위치한 index 값 or x가 없는 경우 0
*/

function solution1(s, x) {
  return s.indexOf(x) === -1 ? 0 : s.indexOf(x);
}

console.log(solution1([2, 1, 11, 7, 4, 3], 6)); // 0
console.log(solution1([2, 1, 11, 7, 4, 3], 3)); // 5

// 자바스크립트의 경우 위와 같이 이미 해당 조건을 구현하는 API가 존재한다.
// → indexOf를 사용하지 않고, 구현하기(결국, indexOf의 내부 로직을 구현하는 것)

function solution2(s, x) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === x) return i;
  }

  return 0;
}

console.log(solution2([2, 1, 11, 7, 4, 3], 6)); // 0
console.log(solution2([2, 1, 11, 7, 4, 3], 3)); // 5

// while을 사용해서 풀이
function solution3(s, x) {
  let location = 0;
  while (location < s.length && s[location] !== x) {
    location++;
    if (s[location] === x) return location;
  }

  return (location = 0);
}

console.log(solution3([2, 1, 11, 7, 4, 3], 6)); // 0
console.log(solution3([2, 1, 11, 7, 4, 3], 3)); // 5
