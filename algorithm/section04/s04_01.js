function solution1(array) {
  let max = Number.MIN_SAFE_INTEGER; // 한자리수 더한 값
  let result = array[0]; // 실제 리턴할 값
  for (let i = 0; i < array.length; i++) {
    let sum = 0; // 각자릿수의 합
    let _value = array[i];
    // 비교를 위한 임시 변수 : array 요소를 직접 바꾸면 나중에 결과값으로 요소를 출력해야할 때, 문제가 생김
    // → 이 부분을 함수로 빼면 _value를 사용하지 않아도 됨.: solution2

    while (_value !== 0) {
      sum += _value % 10;
      _value = Math.floor(_value / 10);
    }
    // 오류 발견!!! : 조건 빼먹음 😭 아래 풀이는 맞췄으니 처음에 푼 풀이가 틀린거였음.
    // 📌 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 반환한다.!!
    if (max < sum) {
      max = sum;
      result = array[i];
    } else if (max === sum) {
      if (result < array[i]) {
        result = array[i];
      }
    }

    // 위 조건을 한번에 적기!!
    // if (max < sum || (max === sum && result < array[i])) {
    //   max = sum;
    //   result = array[i];
    // }
  }

  return result;
}
// 위 풀이에서 생각해야 할 부분 : 변수를 4개(max, result, sum, _value)나 사용해야 할까??

function solution2(array) {
  let result = array[0];
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    const sum = getSum(array[i]);
    if (max < sum) {
      result = array[i];
      max = sum;
    } else if (max === sum) {
      if (result < array[i]) {
        result = array[i];
      }
    }
  }

  return result;
}

function getSum(number) {
  let sum = 0;
  while (number !== 0) {
    const r = number % 10;
    sum += r;
    number = Math.floor(number / 10);
  }

  return sum;
}

console.log(solution1([137, 460, 603, 40, 521, 128, 123]));
console.log(solution2([128, 460, 603, 40, 521, 137, 123]));
