function solution1(arr1, arr2) {
  const common = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        common.push(arr1[i]);
        break;
      }
    }
  }

  return common.sort((a, b) => a - b);
}

// 투 포인트 알고리즘을 사용

// 투 포인트 알고리즘을 사용하기 위해선 "정렬된 입력값" 이 필요하다. 그래서 sort를 통해서 입력값을 선정렬을 한다.
// → 정렬이 되어야만 두 배열의 원소를 비교하여 나온 결과에 따라서 포인터의 증가를 결정할 수 있다.
// → 두 원소를 비교해서 작은 쪽의 배열은 큰 쪽의 배열과 같은 것이 나올 수 없다.

/*
📌 설명
*부분 p1 / p2
arr1 : 1 2 3 5 *9 10
arr2 : 2 3 *6 7 9 11
→ 9와 6을 비교한 후 큰 것의 포인터를 증가한다고 가정하면, 공통원소인 9를 찾을 수 없게 된다.
  또한 arr1은 이미 9보다 작은 값들에 대해선 체크를 한 상태이기때문에 arr2가 9보다 크거나 같아질 때까지 포인터를 증가시켜야한다.
*/

function solution2(arr1, arr2) {
  let p1 = 0,
    p2 = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  const result = [];
  while (p1 !== arr2.length && p2 !== arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr2[p2]);
      p1++;
      p2++;
    } else if (arr1[p1] > arr2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return result;
}

console.log(solution1([1, 3, 9, 5, 2], [3, 2, 5, 7, 8])); // 2 3 5
console.log(solution1([1, 3, 9, 5, 2, 11, 24], [3, 2, 10, 12])); // 2 3

console.log(solution2([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
console.log(solution2([1, 3, 9, 5, 2, 11, 24], [3, 2, 10, 12]));
