function solution1(array, total) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      sum += array[j];
      if (sum > total) break;
      else if (sum === total) {
        count++;
        break;
      }
    }
  }

  return count;
}

// console.log(solution1([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
// console.log(solution1([1, 2, 1, 3, 1, 1, 1, 2], 3)); // 4
// console.log(solution1([1, 1, 1], 2)); // 2

// 내가 생각한 투포인트 알고리즘을 이용한 풀이
// 셀프 피드백 : 뭔가 드럽고 😡 뭔가 정돈되지 못함. 주먹구구식 풀이,,, 뭔가 더 깔끔하게 만들수 있는 방법이 있지 않을까하는 강렬한 욕구가 쏫아오름.
// 반례 존재!!! 재도전하기!!!
// 틀린 풀이 😱
function solution2(array, total) {
  let p1 = 0,
    count = 0,
    sum = 0;
  let p2 = p1 + 1;

  while (p1 !== array.length) {
    if (sum === total) {
      count++;
      p1++;
      p2 = p1 + 1;
      sum = 0;
    } else if (sum > total) {
      p1++;
      p2 = p1 + 1;
      sum = 0;
    } else {
      if (p2 < array.length) {
        sum += array[p2];
        p2++;
      } else {
        p1++;
        p2 = p1 + 1;
        sum = 0;
      }
    }
  }

  return count;
}

// console.log(solution2([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
// console.log(solution2([1, 2, 1, 3, 1, 1, 1, 2], 3)); // 4
// console.log(solution2([1, 1, 1], 2)); // 2 : 반례

/*
이 문제에서의 투포인트 알고리즘은 lt와 rt가 포인트이다.
합을 비교할 때,
→ 더한 값이 주어진 값보다 작으면 rt가 증가
→ 더한 값이 주어진 값보다 크면 lt가 증가
*/

// 재도전 😜
function solution3(array, total) {
  let left = 0,
    right = 0,
    sum = array[0],
    count = 0;

  while (right < array.length) {
    if (sum < total) {
      right++;
      sum += array[right];
    } else {
      left++;
      sum -= array[left];
    }

    if (sum === total) count++;
  }

  return count;
}

console.log(solution3([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
console.log(solution3([1, 2, 1, 3, 1, 1, 1, 2], 3)); // 4
console.log(solution3([1, 1, 1], 2)); // 2
