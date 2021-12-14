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
console.log(solution(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 17
