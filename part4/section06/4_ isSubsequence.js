/** 주의 : substring(부분 문자 포함)이 아니라 subsequence(부분 순서) */

function isSubsequence(str1, str2) {
  let j = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1[j] === str2[i]) {
      j++;
    }
    if (j === str1.length) return true;
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
