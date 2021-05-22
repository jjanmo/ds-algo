function solution1(string) {
  const midIndex = string.length / 2;
  let result = '';

  if (string.length % 2 === 0) {
    result = string.substring(midIndex - 1, midIndex + 1);
  } else {
    result = string[Math.floor(midIndex)];
  }

  return result;
}

//같은 코드 다른 모습
function solution2(string) {
  const midIndex = Math.floor(string.length / 2);

  return string.length % 2 === 0 ? string.substring(midIndex - 1, midIndex + 1) : string[midIndex];
}

console.log(solution1('study'));
console.log(solution1('good'));
console.log(solution2('study'));
console.log(solution2('good'));

//string.substring(start, end) => 👍
//string.substr(start, [length]) => 👎
