function solution(string) {
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE = 'abcdefghijklmmopqrstuvwxyz';

  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (UPPERCASE.includes(string[i])) {
      const index = UPPERCASE.indexOf(string[i]);
      newStr += LOWERCASE[index];
    } else {
      const index = LOWERCASE.indexOf(string[i]);
      newStr += UPPERCASE[index];
    }
  }

  console.log(newStr);
}

solution('StuDY');
