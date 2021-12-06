/*
선택 정렬

1. 주어진 리스트 중에 최소값을 찾는다.
2. 그 값을 맨 앞에 위치한 값과 교체한다.
3. 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 비교하여 교체한다.

*/
function solution1(array) {
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

console.log(solution1([13, 5, 11, 7, 23, 15])); // [ 5, 7, 11, 13, 15, 23 ]

function solution2(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    [array[minIndex], array[i]] = [array[i], array[minIndex]];
  }

  return array;
}

console.log(solution2([13, 5, 11, 7, 23, 15])); // [ 5, 7, 11, 13, 15, 23 ]

/*
js swap 방법

1. 가장 일반적인 방법
✅  solution1에서 사용
임시 변수에 기존값을 담고 그 값을 바꾸고자 하는 곳에 넣어주는 방법


2. 구조분해 할당을 통한 방법
✅ solution2에서 사용

let a = 10;
let b = 20;
[b, a] = [a. b]

이 외에도 수학적인 방법(덧셈과 뺄셈 이용), 비트연산 이용 하는 방법이 있지만 이 방법은 비추하는 방법들
https://dmitripavlutin.com/swap-variables-javascript/


*/
