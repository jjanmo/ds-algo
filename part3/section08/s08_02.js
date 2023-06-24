function solution(n) {
  if (n === 0) return '';

  return `${solution(Math.floor(n / 2))}${n % 2}`;
}

// console.log(solution(11));
// console.log(solution(20));

//---

function review1(n) {
  return n.toString(2);
}

console.log(review1(11)); // 1011

function review2(n) {
  let result = '';

  const rc = (num) => {
    if (num === 0) return;

    const q = Math.floor(num / 2);
    const r = num % 2;

    result = r + result;
    rc(q);
  };

  rc(n);
  console.log(result);
}

review2(11);
