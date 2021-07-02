function solution(string) {
  const newString = string.replace(/[^a-zA-Z]/g, '');
  for (let i = 0; i < newString.length; i++) {
    if (newString[i].toLowerCase() !== newString[newString.length - i - 1].toLowerCase()) {
      return 'No';
    }
  }
  return 'Yes';
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof')); // YES
