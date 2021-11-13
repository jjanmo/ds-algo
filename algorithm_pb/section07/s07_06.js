function solution(array) {
  const sortedArray = [...array].sort((a, b) => a - b);
  let hIndex, pIndex; // hIndex 현수가 받은 번호, pIndex 짝꿍이 받은 번호
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sortedArray[i]) {
      if (!hIndex) {
        hIndex = i + 1;
      } else {
        pIndex = i + 1;
      }
    }
  }

  return [hIndex, pIndex];
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
