/**
 *
 * @param {Array} coinType 동전 종류
 * @param {number} amount  총 금액(거스름돈)
 */

function solution1(coinType, amount) {
  let result = Number.MAX_SAFE_INTEGER;

  const recurse = (sum, count) => {
    if (sum > amount) return;
    if (sum === amount) {
      if (result > count) {
        result = count;
      }
    } else {
      for (let i = 0; i < coinType.length; i++) {
        recurse(sum + coinType[i], count + 1);
      }
    }
  };

  recurse(0, 0);

  return result;
}

console.log(solution1([1, 2, 5], 15));

function solution2(coinType, amount) {
  let sum = 0;
  let index = 0;
  let count = 0;

  coinType.sort((a, b) => b - a);

  while (sum < amount) {
    sum += coinType[index];
    count++;

    if (sum > amount) {
      sum -= coinType[index];
      count--;
      index++;
    } else if (sum == amount) {
      return count;
    }
  }

  return 'CAN NOT'; // 나누어 떨어지지 않는 경우
}

console.log(solution2([1, 2, 5], 15)); // 5원 3개
console.log(solution2([7, 2, 5], 100)); // 7원 14개 / 2원 1개
