/**
 * @description 프로그래머스 문제 "방문길이
 * @input
 * @output
 * @constraints
 */

function solution(dirs) {
  const visited = new Set();
  const position = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    const command = dirs[i];
    const prev = `${position[0]}_${position[1]}`;

    if (command === 'L' && position[0] > -5) {
      position[0]--;
    } else if (command === 'R' && position[0] < 5) {
      position[0]++;
    } else if (command === 'U' && position[1] < 5) {
      position[1]++;
    } else if (command === 'D' && position[1] > -5) {
      position[1]--;
    } else {
      continue;
    }

    const next = `${position[0]}_${position[1]}`;
    visited.add(`${prev}_${next}`);
    visited.add(`${next}_${prev}`);
  }

  return visited.size / 2;
}

console.log(solution('ULURRDLLU')); // 7
console.log(solution('LULLLLLLU')); // 7
