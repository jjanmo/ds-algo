function solution(s, t) {
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

console.log(solution('bacaAacba', 'abc')); // 3
