function solution(n, array) {
  const newArray = [];

  array.forEach((string) => {
    if (!newArray.includes(string)) newArray.push(string);
  });

  console.log(newArray);
}

solution(5, ['good', 'time', 'good', 'time', 'student']);
