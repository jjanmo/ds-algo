function solution1(nums) {
  nums.sort((a, b) => a - b);
}

console.log(solution1([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(solution1([2, 0, 1])); // [0,1,2]
console.log(solution1([0])); // [0]
console.log(solution1([1])); // [1]

/*
solution1 self feedback

자바스크립트에서의 Array API를 사용하면 위 문제의 조건에 맞게 정확히 정렬할 수 있다.
그래서 한 줄이면 된다.
그런데,이 문제가 중급이라고?? 뭔가 문제의 포인트가 있을거라 생각한다.
단지 문제를 풀기 위함이 아니라 문제를 통해서 성장할 수 있는 풀이를 해보자. :)

또한 결국 이 문제는 Array API sort() 메소드의 내부 동작을 구현하는 것과 같은 것이 아닐까 하는 생각이 들었다.
*/

function solution2(nums) {
  const COLORS_COUNT = 3;
  let nIdx = 0;
  for (let i = 0; i < COLORS_COUNT; i++) {
    for (let j = nIdx; j < nums.length; j++) {
      if (nums[j] === i) {
        const tmp = nums[j];
        nums[j] = nums[nIdx];
        nums[nIdx] = tmp;
        nIdx++;
      }
    }
  }
}

console.log(solution2([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(solution2([2, 0, 1])); // [0,1,2]
console.log(solution2([0])); // [0]
console.log(solution2([1])); // [1]

/*
관련 영상을 통해서 해당 문제가 왜 중급 난이도 인지에 대해서 알게 되었다..

방법 1. sort()를 사용 → solution1 O(n log2N)

if) 면접관 질문 : O(n) 복잡도를 갖게 풀어보아라

방법 2. 숫자 카운팅을 통해서 풀 수 있다
✅ 이 부분은 생각지도 못한 부분
   이런 문제를 이런 발상으로 접근한다는게 나에겐 신세계였다.
   정렬이라함은 어떻게 순서를 바꿀것인가를 생각하는게 일반적이여서...
   이러한 풀이 역시 포멧팅의 연장선상에 있는 접근 같다.

if) 면접관 질문 : 카운팅 메소드 말고 in-place swap을 통해서 문제를 풀어보아라 🤪

📌 이 때부터 해당 문제가 중급의 난이도를 갖게된다고 한다.

요약하면, O(n)의 시간복잡도 + in-place swap으로 문제를 해결하시오 가 해당 문제의 조건이 된다면....

방법 3. 퀵정렬와 비슷한 접근법으로 해결
(우선 퀵정렬을 정확히 알아야한다.)

*/

// 방법3 풀이
function solution3(nums) {
  let left = 0,
    index = 0,
    right = nums.length - 1;

  while (index <= right) {
    if (nums[index] === 0) {
      const tmp = nums[index];
      nums[index] = nums[left];
      nums[left] = tmp;
      index++;
      left++;
    } else if (nums[index] === 2) {
      const tmp = nums[index];
      nums[index] = nums[right];
      nums[right] = tmp;
      right--;
    } else {
      index++;
    }
  }
}

console.log(solution3([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(solution3([2, 0, 2, 1, 1, 2])); // [0,1,1,2,2,2]
console.log(solution3([2, 0, 1])); // [0,1,2]
console.log(solution3([0])); // [0]
console.log(solution3([1])); // [1]

// 방법2 풀이
function solution4(nums) {
  let zCount = 0,
    oCount = 0,
    tCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zCount++;
    } else if (nums[i] === 1) {
      oCount++;
    } else {
      tCount++;
    }
  }

  // 합치기
  const result = [];
  for (let i = 0; i < zCount; i++) {
    result.push(0);
  }
  for (let i = 0; i < oCount; i++) {
    result.push(1);
  }
  for (let i = 0; i < tCount; i++) {
    result.push(2);
  }

  return result;
}

console.log(solution4([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(solution4([2, 0, 2, 1, 1, 2])); // [0,1,1,2,2,2]
console.log(solution4([2, 0, 1])); // [0,1,2]
console.log(solution4([0])); // [0]
console.log(solution4([1])); // [1]
