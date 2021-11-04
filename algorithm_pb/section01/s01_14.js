function solution(array) {
  let longestString = array[0];
  let longestLength = array[0].length;

  array.forEach((string) => {
    if (string.length > longestLength) longestString = string;
  });

  return longestString;
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));
