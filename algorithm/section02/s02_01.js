function solution(array) {
  let result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) result.push(array[i]);
  }

  return result;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
