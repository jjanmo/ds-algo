function solution1(word1, word2) {
  let isAnagram = true;

  // object 사용
  // const word1Hash = makeWordHash1(word1.split(''));
  // const word2Hash = makeWordHash1(word2.split(''));

  // for (let property in word1Hash) {
  //   if (!word2Hash[property] || word1Hash[property] !== word2Hash[property]) {
  //     isAnagram = false;
  //     break;
  //   }
  // }

  // return isAnagram ? 'YES' : 'NO';

  // map 사용
  const word1Hash = makeWordHash2(word1);
  const word2Hash = makeWordHash2(word2);

  for (let [key, value] of word1Hash) {
    if (value !== word2Hash.get(key)) {
      isAnagram = false;
      break;
    }
  }

  return isAnagram ? 'YES' : 'NO';
}

function makeWordHash1(array) {
  const hash = {};
  for (let char of array) {
    if (!hash[char]) hash[char] = 0;
    hash[char]++;
  }

  return hash;
}

function makeWordHash2(string) {
  const hash = new Map();

  for (let char of string) {
    if (hash.has(char)) {
      const count = hash.get(char);
      hash.set(char, count + 1);
      // hash.set(char, hash.get(char) + 1); // 이렇게도 가능 BUT 개인적으로 가독성이 떨어진다고 생각!!
    } else {
      hash.set(char, 1);
    }
  }

  return hash;
}

console.log(solution1('AbaAeCe', 'baeeACA')); // YES
console.log(solution1('FabaCC', 'Caaab')); // NO
console.log(solution1('AABBC', 'AAABC')); // NO

function solution2(word1, word2) {
  const hash = new Map();

  for (let char of word1) {
    if (hash.has(char)) {
      const count = hash.get(char);
      hash.set(char, count + 1);
    } else {
      hash.set(char, 1);
    }
  }

  for (let char of word2) {
    if (!hash.has(char) || hash.get(char) === 0) return 'NO';

    const count = hash.get(char);
    hash.set(char, count - 1);
  }

  return 'YES';
}

console.log(solution2('AbaAeCe', 'baeeACA')); // YES
console.log(solution2('FabaCC', 'Caaab')); // NO
console.log(solution2('AABBC', 'AAABC')); // NO

/*

solution1과 solution2의 차이점은 해쉬맵을 몇개 만드냐의 차이이다.
solution1은 해쉬맵을 2개 만들어서 해쉬맵끼리 비교한 것
solution2는 해쉬맵 1개와 문자열을 비교한 것
사실 solution2가 더 효율적이며 중복이 없는 코드인라고 말할수 있겠다...😅

좀 더 DRY한 생각을 하자!
*/
