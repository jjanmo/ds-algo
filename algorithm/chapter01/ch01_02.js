/*
교환정렬 (excahnge sort)
→ 정렬은 다양한 방법으로 가능하다.교환 정렬은 그 중에서도 가장 일반적인 방법이다.

입력 : 배열
출력 : 오름차순 배열
*/

function solution(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }

  return array;
}

console.log(solution([2, 5, 1, 9, 4, 3]));
