function solution1(a, b, c, d, e, f, g) {
  const arr = [a, b, c, d, e, f, g];
  const odd = arr.filter((ele) => ele % 2 !== 0);

  console.log(odd.reduce((acc, cur) => acc + cur));

  let min = odd[0];
  for (let i = 0; i < odd.length; i++) {
    if (min > odd[i]) min = odd[i];
  }
  console.log(min);
}

function solution2(array) {
  const result = [];
  let sum = 0;
  let minOdd = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
      if (minOdd > array[i]) minOdd = array[i];
    }
  }
  result.push(sum);
  result.push(minOdd);

  return result;
}

solution1(12, 77, 38, 41, 53, 92, 85);
console.log(solution2([12, 77, 38, 41, 53, 92, 85]));
