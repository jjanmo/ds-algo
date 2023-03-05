function solution(day, arr) {
  let count = 0;
  arr.forEach((number) => {
    if ((number - day) % 10 === 0) count++;
  });

  console.log(count);
}

solution(3, [25, 23, 11, 47, 53, 17, 33]);
solution(0, [12, 20, 54, 30, 87, 91, 30]);
