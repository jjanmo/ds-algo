function solution1(s) {
  const sArr = s.split('');
  const vowels = 'AaEeIiOoUu';
  let r = s.length - 1;

  for (let i = 0; i < Math.floor(sArr.length / 2); i++) {
    if (i >= r) return;
    if (vowels.includes(sArr[i])) {
      while (!vowels.includes(sArr[r])) {
        r--;
      }
      console.log(i, r);

      const tmp = sArr[i];
      sArr[i] = sArr[r];
      sArr[r] = tmp;
      r--;
    }
  }

  return sArr.join('');
}

console.log(solution1('hello'));
console.log(solution1('leetcode'));
console.log(solution1('aA')); // Aa
