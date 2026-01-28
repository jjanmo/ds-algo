/**
 * @description 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
 * @param {*} num1
 * @param {*} num2
 */
function sameFrequency(num1, num2) {
  const strNum1 = String(num1);
  const strNum2 = String(num2);
  if (strNum1.length !== strNum2.length) return false;

  const frq = {};
  for (let num of strNum1) {
    frq[num] = (frq[num] || 0) + 1;
  }

  for (let num of strNum2) {
    if (!frq[num]) return false;

    frq[num]--;
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
