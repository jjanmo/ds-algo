function solution(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() !== string[string.length - i - 1].toLowerCase()) {
      return 'No';
    }
  }
  return 'Yes';
}

console.log(solution('gooG')); // Yes
console.log(solution('abba')); // Yes
console.log(solution('summUus')); // No
console.log(solution('xabBa')); // No
console.log(solution('xabbay')); // No
console.log(solution('comcom')); // No
console.log(solution('comwWmoC')); // Yes
console.log(solution('comwwtmoc')); // No
