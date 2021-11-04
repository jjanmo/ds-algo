function solution1(string) {
  const newString = string.replace(/[a-zA-Z]/g, '');

  return parseInt(newString, 10);
}

// 직접 찾기
function solution2(string) {
  let numString = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) numString += string[i];
  }

  return Number(numString);
}

console.log(solution1('g0en2T0s8eSoft')); // 208
console.log(solution1('tge0a1h205er')); // 125

console.log('-------');

console.log(solution2('g0en2T0s8eSoft')); // 208
console.log(solution2('tge0a1h205er')); // 125
