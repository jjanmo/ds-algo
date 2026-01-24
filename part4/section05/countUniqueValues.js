/**
 * @param 정렬된 배열
 */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let uniqueCount = 1;
  let ptr1 = 0;
  let ptr2 = 1;

  while (ptr2 < arr.length) {
    if (arr[ptr1] !== arr[ptr2]) {
      uniqueCount++;
      ptr1 = ptr2;
    }
    ptr2++;
  }

  return uniqueCount;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

console.log('-------');

// Set을 사용하면 더 쉽게 풀수 있지 않나...🥲
function solution2(arr) {
  return new Set(arr).size;
}

console.log(solution2([1, 1, 1, 1, 1, 2])); // 2
console.log(solution2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(solution2([])); // 0
console.log(solution2([-2, -1, -1, 0, 1])); // 4

console.log('-------');

// 첫번째 리팩토링 버전
// ↪ 기존 배열을 변형과 동시에 체크하는 방법 > 공간복잡도가 낮아짐
function solution3(arr) {
  if (arr.length === 0) return 0;

  let ptr1 = 0;
  let ptr2 = 1;

  while (ptr2 < arr.length) {
    if (arr[ptr1] !== arr[ptr2]) {
      ptr1++;
      arr[ptr1] = arr[ptr2];
    }
    ptr2++;
  }
  return ptr1 + 1;
}

console.log(solution3([1, 1, 1, 1, 1, 2])); // 2
console.log(solution3([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(solution3([])); // 0
console.log(solution3([-2, -1, -1, 0, 1])); // 4
