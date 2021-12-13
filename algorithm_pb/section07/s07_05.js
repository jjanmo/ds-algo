// 배열의 내장 함수를 이용한 풀이
function solution1(size, tasks) {
  let cache = [];

  for (let i = 0; i < tasks.length; i++) {
    if (cache.includes(tasks[i])) {
      // cache hit
      cache = [tasks[i]].concat(cache.filter((task) => task !== tasks[i]));
    } else {
      if (cache.length < size) cache.unshift(tasks[i]);
      else {
        // cache miss
        cache.pop();
        cache.unshift(tasks[i]);
      }

      // 위에서 처럼 조건으로 구분해주지 않는 경우에는 일관되게 집어넣고 사이즈보다 길면 자르게 구현도 가능
    }
  }

  return cache;
}

console.log(solution1(5, [1, 2, 3, 2, 6, 2, 3, 5, 7])); // 7 5 3 2 6

// 배열의 내장 함수 없이 풀이
function solution2(size, tasks) {
  const cache = [];

  for (let i = 0; i < tasks.length; i++) {
    let index = -1;
    for (let j = 0; j < cache.length; j++) {
      if (cache[j] === tasks[i]) {
        index = j;
        break;
      }
    }

    if (index === -1) {
      if (cache.length < size) cache.unshift(tasks[i]);
      else {
        // cache missing
        for (let j = cache.length - 1; j > 0; j--) {
          cache[j] = cache[j - 1];
        }
        cache[0] = tasks[i];
      }
      // /*
      // 위 코드를 줄일 수 있다.
      // → 사이즈를 사용하면 항상 고정값이기 때문에 length를 체크할 필요 없다.
      // */
      // for (let j = size - 1; j > 0; j--) {
      //   cache[j] = cache[j - 1];
      // }
      // cache[0] = tasks[i];
    } else {
      // cache hit
      for (let j = index; j > 0; j--) {
        cache[j] = cache[j - 1];
      }
      cache[0] = tasks[i];
    }
  }

  return cache;
}

console.log(solution2(5, [1, 2, 3, 2, 6, 2, 3, 5, 7])); // 7 5 3 2 6
