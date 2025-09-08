/**
 * @description 프로그래머스 문제 "방문길이
 * @input
 * @output
 * @constraints
 */

function solution(dirs) {
  const history = {};
  const position = [0, 0];
  let movingDistance = 0;

  for (let i = 0; i < dirs.length; i++) {
    const command = dirs[i];
    switch (command) {
      case "U":
        if (position[1] > 5) break;
        position[1] += 1;
        break;
      case "D":
        if (position[1] < -5) break;
        position[1] -= 1;
        break;
      case "R":
        if (position[0] < 5) break;
        position[0] += 1;
        break;
      case "L":
        if (position[0] < -5) break;
        position[0] -= 1;
        break;
    }
    movingDistance++;
  }
}

function setHistory(history, start, end) {
  if (!history[start]) history[start] = end;
}

function getHistory(history, start) {
  return history[start];
}

console.log(solution("ULURRDLLU")); //7
console.log(solution("LULLLLLLU")); //7
