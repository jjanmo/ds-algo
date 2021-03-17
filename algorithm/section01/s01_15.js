function solution(string) {
  const midIndex = string.length / 2;
  if (string.length % 2 === 0) {
    console.log(string.substring(midIndex - 1, midIndex + 1));
  } else {
    console.log(string[Math.floor(midIndex)]);
  }
}

solution('study');
solution('good');
