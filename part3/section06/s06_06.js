function solution1(n, m) {
  const arr = Array.from({ length: n }, (x, i) => i + 1);

  let i = 0;
  let order = 1;
  while (arr.length > 1) {
    if (order === m) {
      arr.splice(i, 1);
      order = 1;
    } else {
      order++;
      i = (i + 1) % arr.length; // refactoring 👍 : smart code, i think
    }
  }

  return arr[0];
}

console.log(solution1(8, 3)); // 7

// queue의 성질을 이용하는 방법
function solution2(n, m) {
  const queue = Array.from({ length: n }, (x, i) => i + 1);

  let order = 1;
  for (let i = 0; i < queue.length; i++) {
    if (queue.length === 1) return;

    const firstElement = queue.shift();
    if (order === m) order = 1;
    else {
      queue.push(firstElement);
      order++;
    }
  }

  return queue[0];
}

console.log(solution2(8, 3)); // 7

function solution3(n, k) {
  const queue = Array.from({ length: n }, (x, i) => i + 1);
  let result;

  while (queue.length) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }

    queue.shift();
    if (queue.length === 1) result = queue.shift();
  }

  return result;
}

console.log(solution3(8, 3)); // 7
