function solution(word1, word2) {
  let isAnagram = true;
  const word1Hash = makeWordHash(word1.split(''));
  const word2Hash = makeWordHash(word2.split(''));

  for (let property in word1Hash) {
    if (!word2Hash[property] || word1Hash[property] !== word2Hash[property]) {
      isAnagram = false;
      break;
    }
  }

  return isAnagram ? 'YES' : 'NO';
}

function makeWordHash(array) {
  const hash = {};
  for (let char of array) {
    if (!hash[char]) hash[char] = 0;
    hash[char]++;
  }

  return hash;
}

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));
