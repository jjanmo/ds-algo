function solution1(N, strArr) {
  let maxLength = 0;
  strArr.forEach((str) => {
    if (str.length > maxLength) maxLength = str.length;
  });

  const convertedArr = strArr.map((element) => '*'.repeat(maxLength - element.length) + element);

  const map = {};
  let startedNumber = 9;

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < convertedArr.length; j++) {
      if (convertedArr[j][i] !== '*') {
        if (!map[convertedArr[j][i]]) {
          map[convertedArr[j][i]] = startedNumber;
          startedNumber--;
        }
      }
    }
  }

  const numbers = [];
  for (let i = 0; i < strArr.length; i++) {
    let number = '';
    for (let j = 0; j < strArr[i].length; j++) {
      number += map[strArr[i][j]];
    }
    numbers.push(Number(number));
  }

  return numbers.reduce((arr, cur) => arr + cur, 0);
}

// console.log(solution1(2, ['AAA', 'AAA'])); // 1998
// console.log(solution1(2, ['GCF', 'ACDEB'])); // 99437
// console.log(solution1(10, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'])); // 45
// console.log(solution1(2, ['AB', 'BA'])); // 187

/*
solution1에 어떤 오류가 있는 것 같다.
→ 아직 찾지는 못했다...
→ 전체적인 접근 방법은 비슷한 것 같은데...

solution2
다른 풀이를 찾아보다 쌈박한 풀이를 찾았다. 진짜 신선했다.🥳
map을 만들지만 나와는 전혀 다른 맵을 만들었다.
누적값을 이용한 자리수 맵

자릿수는 알아야 한다 → 기억해야 할 것 ✅
글자는 어떤 모르는 숫자이다 → 나중에 부여해주면 되는 것!!!
*/

function solution2(N, arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    let size = 1;
    for (let j = arr[i].length - 1; j >= 0; j--) {
      if (map[arr[i][j]]) map[arr[i][j]] += size;
      else map[arr[i][j]] = size;
      size *= 10;
    }
  }
  let sum = 0;
  let maxNumber = 9;
  Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .forEach((arr) => {
      sum += arr[1] * maxNumber;
      maxNumber--;
    });

  console.log(sum);
  return sum;
}
console.log(solution2(2, ['AAA', 'AAA'])); // 1998
console.log(solution2(2, ['GCF', 'ACDEB'])); // 99437
console.log(solution2(10, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'])); // 45
console.log(solution2(2, ['AB', 'BA'])); // 187
