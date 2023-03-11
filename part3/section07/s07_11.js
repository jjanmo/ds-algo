function solution(n, m, videos) {
  let count = 0;
  let volume = 0;
  for (let i = videos.length - 1; i >= 0; i--) {
    volume += videos[i];
    let tmp = 0;
    count = 0;
    for (let j = videos.length - 1; j >= 0; j--) {
      tmp += videos[j];
      if (tmp >= volume) {
        count++;
        tmp = videos[j];
      }
      if (count > m) break;
    }
    if (count === m) return volume;
  }
}
// console.log(solution(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 17
// console.log(solution2(10, 3, [6, 5, 8, 5, 6, 8, 7, 6, 6, 7])); // 24
// console.log(solution2(5, 4, [1, 1, 1, 1, 1])); // 2  안되네...✅

// 다시 풀기
function solution2(N, M, songs) {
  let totalSongVolume = 0;
  for (let i = 0; i < N; i++) {
    totalSongVolume += songs[i];
  }

  let volume = Math.floor(totalSongVolume / M);
  let total = 0;
  let count = 0;

  while (true) {
    for (let i = 0; i < N; i++) {
      total += songs[i];
      if (total > volume) {
        count++;
        total = songs[i];
        if (i === N - 1) count++;
      } else if (total === volume) {
        count++;
        total = 0;
      } else {
        if (i === N - 1) count++;
      }
    }

    if (count === M) return volume;
    else {
      volume++;
      count = 0;
      total = 0;
    }
  }
}

// console.log(solution2(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 17
// console.log(solution2(10, 3, [6, 5, 8, 5, 6, 8, 7, 6, 6, 7])); // 24
// console.log(solution2(5, 4, [1, 1, 1, 1, 1])); // 2 안되네...✅

// "이분검색"을 이용해야함!!!
function solution3(N, M, songs) {
  let answer;
  let rt = 0;
  let lt = 0;
  for (let i = 0; i < N; i++) {
    rt += songs[i];
    if (lt < songs[i]) lt = songs[i];
  }

  while (lt <= rt) {
    let count = 1;
    let sum = 0;
    const mid = parseInt((lt + rt) / 2); // ✅ 포인트1 이진탐색 활용

    for (let i = 0; i < N; i++) {
      // ✅ 포인트2 비교 방법
      if (sum + songs[i] > mid) {
        count++;
        sum = songs[i];
      } else {
        sum += songs[i];
      }
    }

    // ✅ 포인트3
    if (count <= M) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(solution3(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 17
console.log(solution3(10, 3, [6, 5, 8, 5, 6, 8, 7, 6, 6, 7])); // 24
console.log(solution3(5, 4, [1, 1, 1, 1, 1])); // 2
