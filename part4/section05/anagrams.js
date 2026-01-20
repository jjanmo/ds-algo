function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Map = {};

  for (let char of str1) {
    str1Map[char] = (str1Map[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!str1Map[char]) return false;

    str1Map[char]--;
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
