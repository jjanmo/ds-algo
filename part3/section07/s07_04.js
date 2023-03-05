/*
삽입 정렬

특정 인덱스의 값(i)을 선택하여 이미 정렬된 앞 부분(j)과 모두 비교하여 선택된 값이 들어갈 자리를 찾아서 정렬시키는 방법
→ 말로 표현하는 것보다 그림으로 이해하는 편이 좋다. 참고링크 : https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html
*/

function solution(array) {
  for (let i = 1; i < array.length; i++) {
    const tmp = array[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (tmp < array[j]) {
        array[j + 1] = array[j];
      } else break;
    }
    array[j + 1] = tmp;
  }

  return array;
}

console.log(solution([11, 7, 5, 6, 10, 9])); // 5 6 7 9 10 11
