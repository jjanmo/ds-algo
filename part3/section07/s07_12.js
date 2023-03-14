// 문제에 대한 이해가 잘 안됨... (부등호에 대한 이해)

function solution(n, c, locations) {
  locations.sort((a, b) => a - b);

  let result = 0;
  let lt = 1;
  let rt = locations[n - 1] - 1; // 가장 많이 차이가 날 수 있는 두 말 사이의 거리

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2); // 가장 가까운 두 말 사이의 최대 거리

    if (count(mid, locations) >= c) {
      // Q1. > 가 들어갈수 있는 이유??
      result = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return result;
}

function count(mid, locations) {
  let cnt = 1;
  let endPoint = locations[0];

  for (let i = 1; i < locations.length; i++) {
    if (locations[i] - endPoint >= mid) {
      // Q2. > 가 들어갈수 있는 이유??
      cnt++;
      endPoint = locations[i];
    }
  }

  return cnt;
}

console.log(solution(5, 3, [1, 2, 8, 4, 9])); // 3
console.log(
  solution(
    64,
    19,
    [
      8, 11, 18, 37, 57, 65, 83, 101, 112, 115, 129, 130, 146, 149, 153, 159,
      166, 167, 172, 191, 201, 205, 227, 228, 234, 272, 273, 282, 295, 319, 340,
      394, 398, 399, 436, 446, 453, 481, 499, 503, 611, 655, 680, 692, 718, 725,
      726, 735, 739, 778, 811, 839, 841, 852, 867, 882, 907, 915, 923, 943, 956,
      967, 970, 989,
    ]
  ) // 43
);
