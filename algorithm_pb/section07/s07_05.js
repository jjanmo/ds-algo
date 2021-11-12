function solution(size, tasks) {
  let cache = [];

  for (let i = 0; i < tasks.length; i++) {
    // console.log(cache);
    if (cache.includes(tasks[i])) {
      cache = [tasks[i]].concat(cache.filter((task) => task !== tasks[i]));
    } else {
      if (cache.length < size) cache.unshift(tasks[i]);
      else {
        cache.pop();
        cache.unshift(tasks[i]);
      }
    }
  }

  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
