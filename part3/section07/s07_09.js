function solution(n, array) {
  array.sort((a, b) => a[1] - b[1]);

  let endTime = Number.MIN_SAFE_INTEGER;
  let count = 1;
  let result = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i][0] < endTime) {
      count++;
    } else {
      endTime = array[i][1];
      if (result < count) result = count;
      count = 1;
    }
  }

  return result;
}
console.log(
  solution(5, [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
); // 2
console.log(
  solution(5, [
    [1, 2],
    [12, 15],
    [14, 15],
    [1, 3],
    [1, 4],
  ])
); // 3

// 다시 풀기!!
function solution2(array) {
  let answer = Number.MIN_SAFE_INTEGER;

  const parsed = array
    .reduce((acc, cur) => [...acc, [cur[0], 'S'], [cur[1], 'E']], [])
    .sort((a, b) => {
      if (Number(a[0]) > Number(b[0])) return 1;
      else if (Number(a[0]) < Number(b[0])) return -1;
      else {
        if (a[1] > b[1]) return 1;
        else return -1;
      }
    });

  let count = 0;
  for (let i = 0; i < parsed.length; i++) {
    if (parsed[i][1] === 'S') count++;
    else count--;
    answer = Math.max(answer, count);
  }

  return answer;
}

console.log(
  solution2([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
); // 2
console.log(
  solution2([
    [1, 2],
    [12, 15],
    [14, 15],
    [1, 3],
    [1, 4],
  ])
); // 3
