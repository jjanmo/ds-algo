/**
 * @param 정렬된 배열
 */

function sumZero(arr) {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    else {
      if (arr[i] + arr[j] > 0) j--;
      else i++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
