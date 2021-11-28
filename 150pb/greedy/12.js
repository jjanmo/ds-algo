function solution(time) {
  const buttons = [300, 60, 10];
  let count = '';

  buttons.forEach((button) => {
    const p = Math.floor(time / button);
    count += p + ' ';
    time = time % button;
  });

  return time === 0 ? count : -1;
}

console.log(solution(100)); // 0 1 4
console.log(solution(189)); // -1
console.log(solution(310)); // 1 0 1
