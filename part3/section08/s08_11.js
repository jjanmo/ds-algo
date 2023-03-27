function solution1(n) {
  let result = 1;
  for (let i = 1; i < n + 1; i++) {
    result *= i;
  }

  return result;
}

function solution2(n) {
  const recursive = (n) => {
    if (n === 1) return 1;
    else return n * recursive(n - 1);
  };

  console.log(recursive(n));
}

console.log(solution1(5)); // 120

solution2(5);
