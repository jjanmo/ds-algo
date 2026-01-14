/**
 * same([1,2,3], [4,1,9]) // true(순서는 보장되지 않아됨)
 * same([1,2,3], [1,9]) // false
 * same([1,2,1], [4,4,1]) // false(must be same frequency)
 */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequency = {};

  for (let val of arr1) {
    const square = val ** 2;
    frequency[square] = (frequency[square] || 0) + 1;
  }

  for (let val of arr2) {
    if (!frequency[val]) return false;

    frequency[val]--;
    // if (frequency[val] < 0) return false; >> 이 부분 필요 없음: 0보다 작아지려면 위의 if문 체크를 먼저 돌아야하는데 이 때 이미 체크됨
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
