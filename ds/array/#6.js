// 해당 문제는 문제에서만 요구하는 조건이 많다. 해당 문제 설명을 참고하도록...

function solution1(nums1, m, nums2, n) {
  let index = 0;
  for (let i = 0; i < m + n; i++) {
    if (nums1[i] === 0 && index < n) {
      nums1[i] = nums2[index];
      index++;
    }
  }
  nums1.sort((a, b) => a - b);
}

console.log(solution1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(solution1([1], 1, [], 0)); // [1]
console.log(solution1([0], 0, [1], 1)); // [1]
console.log(solution1([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)); //  [-1, 0, 0, 1, 2, 2, 3, 3, 3]

/*
위의 풀이는 해당 문제에서 원하는 풀이는 아니다. 어쨌든 문제를 풀었다는데 의미를 둔다면 끝이지만 말이다.
→ O(m + n) 으로 풀어보기!
*/

function solution2(nums1, m, nums2, n) {
  let n1Index = m - 1;
  let n2Index = n - 1;
  let zIndex = m + n - 1;

  if (n2Index < 0) return;

  while (n1Index >= 0 && n2Index >= 0) {
    if (nums1[n1Index] < nums2[n2Index]) {
      nums1[zIndex] = nums2[n2Index];
      zIndex--;
      n2Index--;
    } else {
      nums1[zIndex] = nums1[n1Index];
      zIndex--;
      n1Index--;
    }
  }

  while (n2Index >= 0) {
    nums1[zIndex] = nums2[n2Index];
    zIndex--;
    n2Index--;
  }
}

console.log(solution2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(solution2([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)); //  [-1, 0, 0, 1, 2, 2, 3, 3, 3]

console.log(solution2([1], 1, [], 0)); // [1]
console.log(solution2([0], 0, [1], 1)); // [1]
console.log(solution2([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5)); // [1, 2, 3, 4, 5]

console.log(solution2([2, 0], 1, [1], 1)); // [1, 2]
console.log(solution2([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6)); // [-1, 0, 0, 1, 1, 1, 2, 3, 3]

/*
Q1. 인덱스를 왜 저렇게 설정할 수 있을까?

ex) num1 = [ 1 4 5 0 0 0 ]   num2 = [ 1 2 2 ]
                 ^     ^                  ^
 ^표시는 각 인덱스의 초기값이다.(순서대로 nIndex1, zIndex1, nIndex2)

우선 문제에서 각각의 배열은 느슨한(?) 오름차순(?) 형식으로 정렬된 상태이다.
즉 num1에서 m개의 요소는 오름차순으로 되어있기때문에 인덱스 m-1이 숫자 중에 가장 큰수에 해당하고,
num2에서는 채워야할 배열이기때문에 인덱스 n-1이 숫자 중에 가장 큰수가 된다.
그래서 이 두 배열의 끝을 비교하면 가장 큰 수를 선택할 수 있다.
이런 식으로 뒤에서 부터 비교-정렬을 하면 된다.
여기서 포인트는 모든 수(num1 끝에 0제외)가 오름차순으로 정렬되어 있다는 것이였다.
→ 그런데 이 부분이 non-decreasing order 라는 이상한 단어로 전달되어서 처음에 이해하지 못했던거 같다. 이 부분은 Q2에서...

Q2. 문제에서 non-decreasing order라는 말이 있다. 이 말의 의미가 무엇일까?

아래 예시를 보면 직관적으로 알 수 있다.
Strictly Ascending order: 1,2,3,4,5
Non-decreasing order: 1,2,2,3,3,4,5

내림차순은 아니고, 엄밀하게 오름차순도 아니지만 느슨한 오름차순 정도? 같은 것이 있는 경우 이런 표현을 사용하는 것 같다.
*/

// self feedback
// ⭐️ 문제에 대한 이해가 중요하다... 그렇지 않으면 풀고도 왜 이렇게 되는지, 다른 풀이를 보고도 왜 이렇게 풀 수 있는지 이해할 수 없다...🤞🏼

//------------------

// 좀 더 확인해보자!!! : 오류가 있는 풀이
console.log('solution3------------');
function solution3(nums1, m, nums2, n) {
  let n1Index = m - 1;
  let zIndex = m + n - 1;
  let n2Index = n - 1;

  if (n1Index < 0) {
    while (zIndex >= 0) {
      nums1[zIndex] = nums2[n2Index];
      zIndex--;
      n2Index--;
    }
  }

  while (n2Index >= 0) {
    if (nums1[n1Index] <= nums2[n2Index]) {
      nums1[zIndex] = nums2[n2Index];
      zIndex--;
      n2Index--;
    } else {
      nums1[zIndex] = nums1[n1Index];
      zIndex--;
      if (n1Index !== 0) n1Index--;
    }
  }
}

console.log(solution3([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(solution3([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)); //  [-1, 0, 0, 1, 2, 2, 3, 3, 3]

console.log(solution3([1], 1, [], 0)); // [1]
console.log(solution3([0], 0, [1], 1)); // [1]
console.log(solution3([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5)); // [1, 2, 3, 4, 5]

//console.log(solution3([2, 0], 1, [1], 1)); // [1, 2] ✅

//console.log(solution3([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6)); // [-1, 0, 0, 1, 1, 1, 2, 3, 3] ✅
