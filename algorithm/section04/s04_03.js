/*
🔥 나의 생각 1️⃣
각각 3개 테스트마다 반복문을 돌면서 멘토와 멘티인지를 확인하자.
→ 멘토와 멘티가 가능한 경우가 각 테스트마다 존재한다.(각 테스트마다 6개씩)
→ 이 중에서 중복되는 것만을 골라서 개수를 세면 된다.
→ BUT 중복된 것을 어떻게 고를 수 있을까? 비교할 수 있을까?

✅ 역발상(참고한 생각 😭  not my thinking) 2️⃣
멘토와 멘티를 미리 가정하고 각 테스트마다 가정한 멘토와 멘티가 맞는지를 확인하자.
*/

// 2️⃣
function solution1(tests) {
  const TEST_NUMBER = tests.length;
  const STUDENT_NUMBER = tests[0].length;
  let result = 0; // 최종 결과 → 가능한 멘토/멘티 쌍의 수

  // i & j 반복문을 통해서 멘토와 멘티 가정
  for (let i = 1; i <= STUDENT_NUMBER; i++) {
    for (let j = 1; j <= STUDENT_NUMBER; j++) {
      let count = 0; // 가정했던 멘토 멘티가 테스트에서 가능한 개수 → count와 테스트 개수가 같다면 가정했던 멘토와 멘티는 "멘토 멘티가 가능한 쌍"이다.

      // k & l 반복문을 통해서 가정한 멘토와 멘티를 각각 테스트에서 가능한 쌍인지 체크
      for (let k = 0; k < tests.length; k++) {
        let mentor = 0, // 멘토 등수
          mentee = 0; // 멘티 등수
        for (let l = 0; l < tests[0].length; l++) {
          if (tests[k][l] === i) mentor = l;
          if (tests[k][l] === j) mentee = l;
        }
        if (mentor > mentee) count++;
      }
      // console.log(count);
      if (count === TEST_NUMBER) result++;
    }
  }

  return result;
}

// 1️⃣
function solution2(tests) {}

console.log(
  solution1([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
); // 3
console.log(
  solution1([
    [19, 15, 4, 17, 12, 18, 6, 3, 11, 14, 1, 8, 13, 9, 2, 20, 5, 16, 10, 7],
    [5, 20, 18, 17, 14, 11, 19, 3, 10, 16, 6, 8, 13, 9, 2, 12, 4, 7, 1, 15],
  ])
); // 90
