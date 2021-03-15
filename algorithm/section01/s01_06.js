function solution(a, b, c, d, e, f, g) {
  const arr = [a, b, c, d, e, f, g];
  const odd = arr.filter((ele) => ele % 2 !== 0);

  console.log(odd.reduce((acc, cur) => acc + cur));

  let min = odd[0];
  for (let i = 0; i < odd.length; i++) {
    if (min > odd[i]) min = odd[i];
  }
  console.log(min);
}

solution(12, 77, 38, 41, 53, 92, 85);
