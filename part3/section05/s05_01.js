function solution1(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function solution2(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  arr1.sort((a, b) => a - b);

  return arr1;
}

/*
sort() 메소드의 시간 복잡도 : O(n * logn)

투포인터 알고리즘(two pointers algorithm)을 이용하면 시간 복잡도 O(n + m) => O(n)

투포인터 알고리즘(two pointers algorithm)
→ 두 개의 포인터를 잡고 이를 조작하여 원하는 형태로 결과값을 만들어내는 알고리즘으로 주로 특수한 상황에서 사용한다.
→ 입력값이 정렬된 상태일 때만 사용할 수 있다.
*/

// 투포인터 알고리즘을 이용한 풀이
function solution3(arr1, arr2) {
  let p1 = 0,
    p2 = 0;
  const result = [];
  while (p1 !== arr1.length) {
    if (arr1[p1] > arr2[p2]) {
      result.push(arr2[p2]);
      p2++;
    } else {
      result.push(arr1[p1]);
      p1++;
    }
  }

  if (arr1.length > arr2.length) {
    for (let i = p1; i < arr1.length; i++) {
      result.push(arr1[i]);
    }
  } else {
    for (let i = p2; i < arr2.length; i++) {
      result.push(arr2[i]);
    }
  }

  return result;
}

console.log(solution1([1, 3, 5], [2, 3, 6, 7, 9])); // 1 2 3 3 5 6 7 9
console.log(solution2([1, 3, 5], [2, 3, 6, 7, 9])); // 1 2 3 3 5 6 7 9

console.log(solution3([1, 3, 5], [2, 3, 6, 7, 9]));
console.log(solution3([2, 3, 6, 7, 9], [1, 3, 5]));
