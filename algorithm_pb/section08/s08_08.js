function solution1(n, m) {
  const arr = Array.from({ length: n }, (v, i) => i + 1);
  const result = [];
  let count = 0;

  const recurse = (L) => {
    if (L === m) {
      const answer = result.join(' ');
      console.log(answer);
      count++;
    } else {
      for (let i = 0; i < arr.length; i++) {
        result[L] = arr[i];
        recurse(L + 1);
      }
    }
  };

  recurse(0);
  console.log(count);
}

solution1(3, 2);
solution1(4, 3);
