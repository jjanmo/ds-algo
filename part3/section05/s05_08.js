function solution1(s, t) {
  const length = t.length;
  const tHash = makeHash(t);
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const subArray = s.substring(i, i + length);
    const subHash = makeHash(subArray);

    let isAnagram = true;
    // tHash와 subHash 비교
    for (let property in tHash) {
      if (!subHash[property] || tHash[property] !== subHash[property]) {
        isAnagram = false;
        break;
      }
    }
    if (isAnagram) count++;
  }

  return count;
}

function makeHash(array) {
  const hash = {};
  for (let ele of array) {
    if (!hash[ele]) hash[ele] = 0;
    hash[ele]++;
  }

  return hash;
}

console.log(solution1('bacaAacba', 'abc')); // 3

function solution2(s, t) {
  let result = 0;
  const tHash = new Map();
  for (let char of t) {
    if (tHash.has(char)) {
      const count = tHash.get(char);
      tHash.set(char, count + 1);
    } else {
      tHash.set(char, 1);
    }
  }

  const sHash = new Map();
  for (let i = 0; i < s.length; i++) {
    if (sHash.has(s[i])) {
      const count = sHash.get(s[i]);
      sHash.set(s[i], count + 1);
    } else {
      sHash.set(s[i], 1);
    }

    if (i >= t.length) {
      const count = sHash.get(s[i - t.length]);
      sHash.set(s[i - t.length], count - 1);
    }

    let isAnagram = true;
    for (let [key, value] of tHash) {
      if (!sHash.has(key) || sHash.get(key) === 0 || sHash.get(key) !== value) isAnagram = false;
    }

    if (isAnagram) result++;
  }

  return result;
}

console.log(solution2('bacaAacba', 'abc'));

/*

위 풀이(solution2)는 O(n * m)으로 문제를 푼 것이라고 볼 수 있다.
즉, 길이가 엄청 길어지는 경우 n^2과 같은 결과를 보여줄 수 있다.
✅ O(n)으로 풀수 있는 방법이 있는지 생각해보자.

*/
