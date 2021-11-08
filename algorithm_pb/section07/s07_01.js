/*
선택 정렬

1. 주어진 리스트 중에 최소값을 찾는다.
2. 그 값을 맨 앞에 위치한 값과 교체한다.
3. 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 비교하여 교체한다.

*/
function solution(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    const tmp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = tmp;
  }

  return array;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
