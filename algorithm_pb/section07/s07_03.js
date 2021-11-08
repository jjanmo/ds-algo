function solution(array) {
  const plusArray = array.filter((num) => num > 0);
  const minusArray = array.filter((num) => num < 0);

  return [...minusArray, ...plusArray];
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
