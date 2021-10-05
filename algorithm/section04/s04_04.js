function solution(total, list) {
  list.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  let sum = 0;
  let count = 0;
  let index = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i][0] + list[i][1];
    count++;
    if (sum > total) {
      sum -= list[i][0] + list[i][1];
      count--;
      index = i;
      break;
    }
  }

  // 할인받는 물건 체크
  for (let i = index; i < list.length; i++) {
    const value = list[i][0] / 2;
    sum += value + list[i][1];
    if (sum <= total) {
      count++;
    } else {
      sum -= value + list[i][1];
    }
  }

  return count;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
); // 4

console.log(
  solution(596, [
    [6, 331],
    [4, 251],
    [8, 675],
    [5, 214],
    [10, 735],
    [5, 996],
    [9, 609],
    [9, 371],
    [8, 377],
    [5, 707],
    [7, 907],
    [6, 433],
    [9, 737],
    [8, 796],
    [4, 265],
    [3, 484],
    [8, 488],
    [8, 191],
    [9, 232],
    [4, 195],
  ])
); // 2
