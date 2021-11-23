function solution1(array, k) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += array[j];
    }
    if (sum > max) max = sum;
  }

  return max;
}

console.log(solution1([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56

function solution2(array, k) {
  let max = 0;
  for (let i = 0; i < k; i++) {
    max += array[i];
  }

  let sum = max;
  for (let i = 1; i <= array.length - k; i++) {
    sum += array[i + k - 1] - array[i - 1];
    if (sum > max) max = sum;
  }

  return max;
}

console.log(solution2([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56

/*
슬라이딩 윈도우 알고리즘 문제

윈도우를 밀고 가면서 특정 로직을 행한다고 하여 슬라이딩 윈도우 알고리즘 이라고 한다.
이러한 알고리즘 문제는 위에서 처럼 고정 값("연속된 3일간")으로서의 "윈도우"가 존재해야한다.
+
슬라이딩이 이루어질 때, 변하는 값과 변하지 않는 값을 잘다루어야한다.
여기서는 총 합에서 더하고 빼기를 통해서 로직을 만든것처럼.
이렇게 하면 solution1(O(n^2))과 다르게  시간복잡도 O(n)으로 문제를 해결할 수 있다.

드디어 슬라이딩 윈도우 알고리즘이 무엇인지 이해하였다.
*/
