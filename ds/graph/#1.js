/*
초급 난이도의 그래프 문제...라고 하는데...
구현이 안되네...😅
역시 내용을 알아도 그걸 구현하는 것은 또 다른 문제

*/

// DFS 풀이
function solution(rooms) {
  const visited = [0]; // visited room
  const stack = [[...rooms[0]]];

  let index = 0;
  while (stack.length !== 0) {
    const room = stack[index];
    for (let i = room.length - 1; i >= 0; i--) {
      if (visited.indexOf(room[i]) === -1) {
        visited.push(room[i]);
        stack.push([...rooms[room[i]]]);
        index++;
        break;
      } else {
        room.pop();
      }
    }

    if (room.length === 0) {
      stack.pop();
      index--;
    }
  }

  return visited.length === rooms.length;
}

console.log(solution([[1], [2], [3], []])); // true
console.log(solution([[1, 3], [3, 0, 1], [2], [0]])); // false
