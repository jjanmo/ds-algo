function solution1(n, k) {
  let count = 0;
  const set = new Set();
  for (let i = 1; i <= n; i++) {
    count++;
    if (n % i === 0) {
      set.add(i);
    }
  }
  console.log(count, set);
  return [...set].sort((a, b) => a + b)[k - 1] || -1;
}

console.log(solution1(100, 6));

function solution2(n, k) {
  let count = 0;
  const set = new Set();
  for (let i = 1; i <= Math.round(n / 2); i++) {
    count++;
    if (n % i === 0) {
      set.add(i);
    }
  }
  set.add(n); // 자기 자신 추가해야함
  console.log(count, set);
  return [...set].sort((a, b) => a + b)[k - 1] || -1;
}

console.log(solution2(100, 6));
