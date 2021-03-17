function solution(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (!newString.includes(string[i])) newString += string[i];
  }
  console.log(newString);
}

solution('ksekkset');
