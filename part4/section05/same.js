/**
 * same([1,2,3], [4,1,9]) // true(순서는 보장되지 않아됨)
 * same([1,2,3], [1,9]) // false
 * same([1,2,1], [4,4,1]) // false(must be same frequency)
 */

function same(arr1, arr2) {
  const frequency = {};

  const squares = arr1.map((num) => Math.pow(num, 2));
  squares.forEach((square) => {
    if (!frequency[square]) {
      frequency[square] = 1;
      return;
    }

    frequency[square]++;
  });

  for (let i = 0; i < arr2.length; i++) {
    if (!frequency[arr2[i]]) return false;

    frequency[arr2[i]]--;
  }

  return Object.values(frequency).every((value) => !value);
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
