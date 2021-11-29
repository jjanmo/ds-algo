function solution(C) {
  const coins = [25, 10, 5, 1];
  let change = C;
  let result = '';

  coins.forEach((coin) => {
    const count = Math.floor(change / coin);
    result += count + ' ';
    change %= coin;
  });

  return result;
}

console.log(solution(124)); // 4 2 0 4
console.log(solution(25)); // 1 0 0 0
console.log(solution(194)); // 7 1 1 4
