function solution1(n, m) {
  const arr = Array.from({ length: n }, (x, i) => i + 1);

  let i = 0;
  let order = 1;
  while (arr.length !== 1) {
    if (order === m) {
      arr.splice(i, 1);
      order = 1;
      if (arr.length === i) i = 0;
    } else {
      order++;
      if (arr.length - 1 === i) {
        i = 0;
      } else {
        i++;
      }
    }
  }

  return arr[0];
}

console.log(solution1(8, 3)); // 7
