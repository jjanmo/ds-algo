function solution1(nums) {
  let left = 0,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (left === sum - nums[i] - left) return i;
    left += nums[i];
  }

  return -1;
}

console.log(solution1([1, 7, 3, 6, 5, 6])); // 3
console.log(solution1([1, 8, 2, 9, 2, 3, 6])); // 3
console.log(solution1([1, 2, 3])); // -1
console.log(solution1([2, 1, -1])); // 0
console.log(solution1([2, 5, 7])); // -1

/*
self feedback

이 문제를 풀 때, 두가지 방법으로 접근 할 수 있다.
가장 먼저 들었던 생각

방법 1. pivot을 0 ~ n까지로 설정해서 좌우의 합을 더해서 비교하는 방법
→ 이 방법은 pivot을 설정할 때, for문이 한번 사용되고 그 안에서 다시 좌우 합에 대한 계산이 이루어진다.
  그렇기 때문에 시간복잡도가 O(n^2)이 된다.

📌 이 방법을 생각을 한 후에 이중for문으로 밖에 풀수 없나 라는 의문을 갖게 되었다.

방법2. sum을 이용하여 인덱스 2개를 셋팅하여 좌우를 비교하는 방법이 있다. :  ✅ solution1
→ 이러한 방법을 슬라이딩 알고리즘이라고 부른다고 한다...

※ 사실 슬라이딩 알고리즘이라고 하여 찾아봤는데, 정확히 어떠한 의미인지 와닿지가 않았다.
그리고 투포인트 알고리즘과 유사하여 헷갈리는 방법이기도 했다. 어쨌든 중요한 것은 이러한 문제에서
이러한 생각(사고)을 할 수 있느냐 없는냐이다. 이 알고리즘이 뭐다라는 것을 알기보다 이러한 경우엔
이러한 방법으로 접근하면 되지않을까라는 생각이 먼저 들어야한다. 모든 문제(실무에서도 마찬가지)가
딱 틀에 박혀진 채로 등장하지 않기 때문이다.
*/

// O(n^2)으로도 풀어보자
function solution2(nums) {
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    let right = 0;
    for (let j = i + 1; j < nums.length; j++) {
      right += nums[j];
    }

    if (left === right) return i;
    left += nums[i];
  }

  return -1;
}

console.log(solution2([1, 7, 3, 6, 5, 6])); // 3
console.log(solution2([1, 8, 2, 9, 2, 3, 6])); // 3
console.log(solution2([1, 2, 3])); // -1
console.log(solution2([2, 1, -1])); // 0
console.log(solution2([2, 5, 7])); // -1
