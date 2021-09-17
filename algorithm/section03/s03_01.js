function solution1(string) {
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i].toLowerCase() !== string[string.length - i - 1].toLowerCase()) {
      return 'No';
    }
  }
  return 'Yes';
}

function solution2(string) {
  const lowerString = string.toLowerCase();
  const reversedString = lowerString.split('').reverse().join('');

  return lowerString === reversedString ? 'YES' : 'NO';
}

console.log(solution1('gooG')); // Yes
console.log(solution1('abba')); // Yes
console.log(solution1('summUus')); // No
console.log(solution1('xabBa')); // No
console.log(solution1('xabbay')); // No
console.log(solution1('comcom')); // No
console.log(solution1('comwWmoC')); // Yes
console.log(solution1('comwwtmoc')); // No

console.log('-----------------');

console.log(solution2('gooG')); // Yes
console.log(solution2('abba')); // Yes
console.log(solution2('summUus')); // No
console.log(solution2('xabBa')); // No
console.log(solution2('xabbay')); // No
console.log(solution2('comcom')); // No
console.log(solution2('comwWmoC')); // Yes
console.log(solution2('comwwtmoc')); // No
