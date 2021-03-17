function solution(string) {
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (UPPERCASE.includes(string[i])) count++;
  }

  console.log(count);
}

solution('KoreaTimeGood');
