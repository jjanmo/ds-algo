// 오류 풀이!! ❌
function solution1(coins, k) {
  const result = []; // 체크용
  const sorted = coins.sort((a, b) => b - a);
  let count = 0,
    total = 0;

  for (let c of sorted) {
    while (total + c <= k) {
      result.push(c);
      total += c;
      count++;
    }
  }

  console.log(count, result);
}

solution1([1, 3, 5], 15); // 3
solution1([1, 8, 20, 25, 50], 129); // 5 ❌
solution1([1, 5, 10, 15, 20, 25, 30, 50, 70, 65, 90, 100], 290); // 3

// 단순히 정렬만으로는 문제가 풀리지 않나보군...
// 보통 동전 종류가 단위대로 되어있다면, 위의 풀이처럼 높은 금액을 채우는 형식으로 접근이 가능
// But, 위에 처럼 단위와 관계없다면 이런 방식으로 풀수 없음!
// 이런 경우 DFS를 통해서 접근해야함
// 여기서 조건을 봐야함 위 문제 조건은, 동전 종류 N(1<=N<=12) 이기때문에 DFS 재귀로 가능하지만 100종류 1000종류 이런 식으로 되면 DP로 풀어야함
// → 조건을 보고 무엇으로 알고리즘을 설계할지 봐야함

// DP문제는 "dp[i]의 정의"가 중요하다.
// → dp[i] : i 금액을 거슬러 주는데 사용된 최소 동전의 개수
function solution2() {}

solution2([1, 3, 5], 15); // 3
solution2([1, 8, 20, 25, 50], 129); // 5
solution2([1, 5, 10, 15, 20, 25, 30, 50, 70, 65, 90, 100], 290); // 3
