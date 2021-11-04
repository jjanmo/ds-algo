function solution(array) {
  let count = 1;
  let tall = array[0];
  for (let i = 1; i < array.length; i++) {
    if (tall < array[i]) {
      count++;
      tall = array[i];
    }
  }

  return count;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
