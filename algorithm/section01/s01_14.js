function solution(n, array) {
  let longestString = array[0];
  let longestLength = array[0].length;

  array.forEach((string) => {
    if (string.length > longestLength) longestString = string;
  });

  console.log(longestString);
}

solution(5, ['teacher', 'time', 'student', 'beautiful', 'good']);
