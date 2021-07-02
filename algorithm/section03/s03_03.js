function solution(string) {
  const newString = string.replace(/[a-zA-Z]/g, '');

  return parseInt(newString, 10);
}

console.log(solution('g0en2T0s8eSoft')); // 208
console.log(solution('tge0a1h205er')); // 125
