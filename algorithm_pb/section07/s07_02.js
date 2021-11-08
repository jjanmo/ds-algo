/*
버블 정렬

두 인접한 원소를 검사하여 정렬하는 방법으로서 마치 거품이 일어나는 것처럼 비교한다고 하여 버블 정렬이라고 부른다.
1. 인접한 요소끼리 차례로 비교하면서 가장 끝에 가장 큰 수가 오게 된다.
2. 선택정렬과는 다르게 가장 마지막부터 정렬이 이루어진다.
3. 이후 차례로 끝에서 부터 한개씩 제외하면서 반복적으로 버블 비교를 행한다.
*/

function solution(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return array;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
