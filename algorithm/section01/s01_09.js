function solution(string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    newStr += string[i] === 'A' ? '#' : string[i];
  }
  console.log(newStr);
}

solution('BANANA');
