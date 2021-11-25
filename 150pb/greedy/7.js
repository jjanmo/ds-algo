function solution1(n, data) {
  data.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  let count = 0;
  for (let i = 0; i < data.length; i++) {
    const [document, interview] = data[i];
    let passed = true;
    for (let j = i - 1; j >= 0; j--) {
      if (document > data[j][0] && interview > data[j][1]) {
        passed = false;
        break;
      }
    }
    if (passed) count++;
  }

  return count;
}

console.log(
  solution1(5, [
    [3, 2],
    [1, 4],
    [4, 1],
    [2, 3],
    [5, 5],
  ])
); // 4
console.log(
  solution1(7, [
    [3, 6],
    [7, 3],
    [4, 2],
    [1, 4],
    [5, 7],
    [2, 5],
    [6, 1],
  ])
); // 3

/*
solution1의 경우엔 이중for문이 돌아간다. 그렇기 때문에 예상했던대로 "시간초과"가 나왔다.
최악의 경우 100000 * 100000 이런 반복이 일어날 수 있다...😰


*/

function solution2(n, data) {
  data.sort((a, b) => a[0] - b[0]);

  let highRank = data[0][1]; // 가장 낮은 숫자가 가장 높은 등수
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i][1] <= highRank) {
      count++;
      highRank = data[i][1];
    }
  }

  return count;
}

console.log(
  solution2(5, [
    [3, 2],
    [1, 4],
    [4, 1],
    [2, 3],
    [5, 5],
  ])
); // 4
console.log(
  solution2(7, [
    [3, 6],
    [7, 3],
    [4, 2],
    [1, 4],
    [5, 7],
    [2, 5],
    [6, 1],
  ])
); // 3

/*
solution1에서는 두 분야(서류/면접)의 순위 평균을 기준으로 정렬하여 위에서부터 비교하면 될 것이라고 생각했다.
나는 이 두가지 기준을 평균이라는 것을 통해서 한번에 비교하려고 하였다. 하지만 이것에 대한 예외가 존재하였고
결국, 정렬의 의미가 없어진 것...!!!

이런 경우 접근 방법은 정렬을 통해서 조건 하나를 제거하고 나머지 조건 1개만으로 비교하여 원하는 값을 찾아내는 것이다.
이 문제의 경우 무조건 두 등수 중 적어도 하나의 등수가 높아야하는 것이 조건이기 때문에, 하나를 정렬을 통해서 줄세우면
나머지 하나의 등수가 높은지 여부만 판단해서 높은 경우에 카운팅해주면 되었다.

*/
