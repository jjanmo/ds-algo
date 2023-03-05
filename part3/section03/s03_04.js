function solution1(str, char) {
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

// 생각하지 못한 풀이 👍
// -> 방향성??으로 접근
function solution2(str, char) {
  const answer = [];
  let distance = Number.MAX_SAFE_INTEGER;
  // 정방향 탐색(왼쪽에서부터)
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      distance = 0;
    } else {
      distance++;
    }
    answer.push(distance);
  }

  // 역방향 탐색(오른쪽에서부터)
  distance = Number.MAX_SAFE_INTEGER;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === char) {
      distance = 0;
    } else {
      distance++;

      if (answer[i] > distance) answer[i] = distance;
    }
  }

  return answer.join(' ');
}

console.log(solution1('teachermode', 'e')); // 1 0 1 2 1 0 1 2 2 1 0

console.log('------');

console.log(solution2('teachermode', 'e')); // 1 0 1 2 1 0 1 2 2 1 0
