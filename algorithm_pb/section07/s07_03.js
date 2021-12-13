function solution1(array) {
  const plusArray = array.filter((num) => num > 0);
  const minusArray = array.filter((num) => num < 0);

  return [...minusArray, ...plusArray];
}

console.log(solution1([1, 2, 3, -3, -2, 5, 6, -6])); // -3 -2 -6 1 2 3 5 6

// 정렬하는 방식으로 해결하기 1
function solution2(array) {
  let left = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      let index = i;
      while (left < index) {
        [array[index - 1], array[index]] = [array[index], array[index - 1]];
        index--;
      }
      left++;
    }
  }

  return array;
}
console.log(solution2([1, 2, 3, -3, -2, 5, 6, -6])); // -3 -2 -6 1 2 3 5 6

// 버를정렬을 이용하는 방식
function solution3(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > 0 && array[j + 1] < 0) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }

  return array;
}
console.log(solution3([1, 2, 3, -3, -2, 5, 6, -6])); // -3 -2 -6 1 2 3 5 6
