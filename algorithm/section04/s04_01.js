function solution(array) {
  let max = Number.MIN_SAFE_INTEGER;
  let result = array[0];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    let _value = array[i];
    while (_value !== 0) {
      sum += _value % 10;
      _value = Math.floor(_value / 10);
    }
    if (max < sum) {
      max = sum;
      result = array[i];
    } else if (max === sum) {
      if (result < array[i]) {
        result = array[i];
      }
    }
  }

  return result;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
