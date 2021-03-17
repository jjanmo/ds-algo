function solution(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) count++;
  }

  console.log(count);
}

solution('COMPUTERPROGRAMMING', 'R');
