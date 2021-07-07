function solution(array) {
  let max = Number.MIN_SAFE_INTEGER; // 한자리수 더한 값
  let result = array[0]; // 실제 리턴할 값
  for (let i = 0; i < array.length; i++) {
    let sum = 0; // 각자릿수의 합
    let _value = array[i]; // 비교를 위한 임시 변수 : array 요소를 직접 바꾸면 나중에 결과값으로 요소를 출력해야할 때, 문제가 생김
    while (_value !== 0) {
      sum += _value % 10;
      _value = Math.floor(_value / 10);
    }
    if (max <= sum) {
      max = sum;
      result = array[i];
    }
  }

  return result;
}
// 위 풀이에서 생각해야 할 부분 : 변수를 4개(max, result, sum, _value)나 사용해야 할까??

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
