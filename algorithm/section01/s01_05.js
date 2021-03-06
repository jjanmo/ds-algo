function solution1(a, b, c, d, e, f, g) {
  const min = Math.min(a, b, c, d, e, f, g);

  return min;
}

function solution2(a, b, c, d, e, f, g) {
  const arr = [a, b, c, d, e, f, g];
  arr.sort((a, b) => a - b);

  return arr[0];
}

function solution3(array) {
  // let min = Number.MAX_SAFE_INTEGER; // 큰 값으로 초기화 시키는 방법, 이와 같은 방법으로 초기화 시킬 수 있다.
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i];
  }

  return min;
}

console.log(solution1(5, 3, 7, 11, 2, 15, 17));
console.log(solution2(5, 3, 7, 11, 2, 15, 17));
console.log(solution3([5, 3, 7, 11, 2, 15, 17]));
