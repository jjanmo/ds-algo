/*
1 ~ n 까지의 집합의 부분집합을 구하시오
*/
// DFS
function solution(n) {
  const subset = [false]; // 해당 인덱스가 부분집합에 포함되면 true 아니면 false

  if (n === n + 1) {
    return;
  } else {
  }
}

console.log(solution(3));

/*
OUPUT
1 2 3
1 2
1 3
1
2 3
2
3
*/
