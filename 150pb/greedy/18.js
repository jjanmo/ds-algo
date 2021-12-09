function solution1(N) {
  const initialN = N;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= Math.floor(N / 5); i++) {
    let tmp = 0;
    if (i !== 0) N -= 5 * i;
    tmp += i;
    if (N % 3 === 0) {
      tmp += N / 3;

      if (min > tmp) min = tmp;
    }

    N = initialN;
  }

  return min === Number.MAX_SAFE_INTEGER ? -1 : min;
}

// console.log(solution1(18)); // 4
// console.log(solution1(4)); // -1
// console.log(solution1(6)); // 2
// console.log(solution1(9)); // 3
// console.log(solution1(11)); // 3

/*
원래 solution2이 내가 처음에 구현하려던 로직이였다.
그런데 아무리 해도 구현을 못하겠어서 강제적으로(?) for문으로 만들어서 해결하였다.

우선 내가 놓친부분은 항상 5를 먼저 해결해야한다고 생각한 점.
5와 3은 순서가 정해진게 아니다. ✅
5kg 바구니를 하나라도 사용하면 전체값은 최소가 될 수 있다.
그렇기 때문에 이 부분을 매번 체크하게 해주는 로직을 짜면 되었던 것!!
*/

function solution2(N) {
  let count = 0;
  while (N > 0) {
    if (N % 5 === 0) {
      count += N / 5;
      return count;
    }

    N -= 3;
    count++;
  }

  return N < 0 ? -1 : count;
}

console.log(solution2(18)); // 4
console.log(solution2(4)); // -1
console.log(solution2(6)); // 2
console.log(solution2(9)); // 3
console.log(solution2(11)); // 3
