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
function solution2(tests) {
  const CHECK_NUMBER = tests.length; // 멘토-멘티가 될 수 있는 체크 개수 → 가능한 멘토-멘티 쌍이 각 테스트마다 1개씩 모두 존재하면 그 멘토-멘티는 가능한 쌍이다.
  const possibleArray = [];
  let result = 0;

  for (let i = 0; i < tests.length; i++) {
    const tmp = [];
    for (let j = 0; j < tests[0].length - 1; j++) {
      for (let k = j + 1; k < tests[0].length; k++) {
        tmp.push({
          mentor: tests[i][j],
          mentee: tests[i][k],
        });
      }
    }
    possibleArray.push(tmp);
  }

  for (let i = 0; i < possibleArray[0].length; i++) {
    let count = 1;
    for (let j = 1; j < possibleArray.length; j++) {
      for (let k = 0; k < possibleArray[j].length; k++) {
        if (isEqual(possibleArray[0][i], possibleArray[j][k])) count++;
      }
    }
    if (count === CHECK_NUMBER) result++;
  }

  return result;
}

// 두 객체의 속성(키)이 동일한하다는 조건에서 비교
function isEqual(obj1, obj2) {
  const PROPERTY_COUNT = Object.keys(obj1).length;
  let count = 0;

  for (const [key, value] of Object.entries(obj1)) {
    if (value === obj2[key]) count++;
  }
  return count === PROPERTY_COUNT;
}

// 📌 피드백
// 내 생각을 구현해본 결과가 반복문 안에 반복문 안에 반복문의 향연....이기에 구현은 했지만 만족스럽지 못하다...
// → 2️⃣ 풀이를 통해서 생각의 과정을 학습한 뒤에 나의 생각을 다시 구현해본 것이기 때문에 처음부터 저렇게 구현하는 것은 쉽지않을 것으로 예상된다.
// → 물론 결과적으로 나의 생각을 제대로 구현하지 못해서 강의를 참고하게 되었지만 말이다...
// → 모든 경우의 수를 다 생각하여 구하는 방법은 이중for문 이상이 들어갈 수 있다는 점을 항상 생각해두자. 뭔가 이중for문을 넘어가면 잘못된 풀이라고 단정짓는 경향이 있는 것 같다.

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

console.log(
  solution2([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
); // 3
console.log(
  solution2([
    [19, 15, 4, 17, 12, 18, 6, 3, 11, 14, 1, 8, 13, 9, 2, 20, 5, 16, 10, 7],
    [5, 20, 18, 17, 14, 11, 19, 3, 10, 16, 6, 8, 13, 9, 2, 12, 4, 7, 1, 15],
  ])
); // 90
