function solution1(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function solution2(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  arr1.sort((a, b) => a - b);

  return arr1;
}

console.log(solution1([1, 3, 5], [2, 3, 6, 7, 9])); // 1 2 3 3 5 6 7 9
console.log(solution2([1, 3, 5], [2, 3, 6, 7, 9])); // 1 2 3 3 5 6 7 9
