function solution1(a, b, c) {
  return Math.min(a, b, c);
}

function solution2(a, b, c) {
  if (a > b) {
    if (b > c) {
      return c;
    } else {
      return b;
    }
  } else {
    if (a > c) {
      return c;
    } else {
      return a;
    }
  }
}

console.log(solution1(6, 5, 11));
console.log(solution2(6, 5, 11));
console.log(solution1(6, 5, 3));
console.log(solution2(6, 5, 3));

// 색다른 문제 풀이
// -> 개인적으로 코드가 뭔가 정돈된 느낌(?)인 것을 좋아해서
//    아래와 같은 코드로 생각하는 법을 몰랐던 듯하다.
//    좀 더 직관적이고 단순한 풀이라는 생각이 든다.

function solution3(a, b, c) {
  let answer;
  if (a > b) answer = b;
  else answer = a;

  if (answer > c) answer = c;

  return answer;
}

console.log(solution3(6, 5, 11));
console.log(solution3(6, 5, 3));
