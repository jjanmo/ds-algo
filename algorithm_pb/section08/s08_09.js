/**
 *
 * @param {Array} coinType 동전 종류
 * @param {number} amount  총 금액(거스름돈)
 */

function solution1(coinType, amount) {
  let result = Number.MAX_SAFE_INTEGER;
  coinType.sort((a, b) => b - a);

  const recurse = (sum, count) => {
    if (sum > amount) return; // 1) 잔돈보다 더한수가 커지면 리턴
    if (count >= result) return; // 2) 현재 결과값보다 큰 잔돈개수가 되면 리턴
    // → 이 코드 하나로 재귀함수의 호출 수가 기하급수적으로 준다. 😎 이런 코드를 잘 생각해내야함!!
    // → 1843(없을때) > 78(>만 있을때) > 10(>= 모두 있을때) : <예시기준>
    // → coinType을 내림차순으로 바꾸면 1 🤩
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

// console.log(solution2([1, 2, 5], 15)); // 5원 3개
// console.log(solution2([7, 2, 5], 100)); // 7원 14개 / 2원 1개
