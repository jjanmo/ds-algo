function solution(cost) {
  const coins = [500, 100, 50, 10, 5, 1];
  let remain = 1000 - cost;
  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    count += Math.floor(remain / coins[i]);
    remain %= coins[i];
  }

  return count;
}
console.log(solution(380)); // 4
console.log(solution(1)); // 15
