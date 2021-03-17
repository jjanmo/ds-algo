function solution(array) {
  const sum = array.reduce((acc, cur) => acc + cur);
  const diff = sum - 100;
  let result;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (diff === array[i] + array[j]) {
        const noDwarf = [array[i], array[j]];
        result = array.filter((number) => !noDwarf.includes(number));
        // return result;
      }
    }
  }

  console.log(result);
}

solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);
