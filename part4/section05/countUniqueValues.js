/**
 * @param 정렬된 배열
 */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let uniqueCount = 1;
  let ptr1 = 0;
  let ptr2 = 1;

  while (ptr2 < arr.length) {
    if (arr[ptr1] === arr[ptr2]) {
      ptr2++;
    } else {
      uniqueCount++;
      ptr1 = ptr2;
    }
  }

  return uniqueCount;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
