function solution(str, char) {
  const charIndexList = str
    .split('')
    .map((ele, idx) => ele === char && idx)
    .filter(Boolean);

  let result = '';
  for (let i = 0; i < str.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < charIndexList.length; j++) {
      const diff = Math.abs(i - charIndexList[j]);
      if (min > diff) min = diff;
    }
    result += min + ' ';
  }

  return result;
}

console.log(solution('teachermode', 'e')); // 1 0 1 2 1 0 1 2 2 1 0
