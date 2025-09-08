/**
 * @description 프로그래머스 문제 "방문길이
 * @input
 * @output
 * @constraints
 */

function solution(dirs) {
  const historyMap = {};
  const position = { x: 0, y: 0 };
  let movingDistance = 0;

  for (let i = 0; i < dirs.length; i++) {
    const command = dirs[i];
    const prev = `${position.x}_${position.y}`;

    switch (command) {
      case 'U':
        position.y += 1;
        if (position.y > 5) {
          position.y -= 1;
          continue;
        }
        break;
      case 'D':
        position.y -= 1;
        if (position.y < -5) {
          position.y += 1;
          continue;
        }
        break;
      case 'R':
        position.x += 1;
        if (position.x > 5) {
          position.x -= 1;
          continue;
        }
        break;
      case 'L':
        position.x -= 1;
        if (position.x < -5) {
          position.x += 1;
          continue;
        }
        break;
    }

    const next = `${position.x}_${position.y}`;

    if (historyMap[prev] === next || historyMap[next] === prev) continue;

    historyMap[prev] = next;
    movingDistance++;
  }

  return movingDistance;
}

console.log(solution('ULURRDLLU')); // 7
console.log(solution('LULLLLLLU')); // 7
