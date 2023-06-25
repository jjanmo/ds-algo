function solution(n, m) {
  const result = [];
  let count = 0;

  const dfs = (start) => {
    if (result.length === m) {
      console.log('✔️', result.join(' '));
      count++;
      return;
    }

    for (let i = start; i <= n; i++) {
      result.push(i);
      dfs(i + 1);
      result.pop();
    }
  };

  dfs(1);
  console.log(count);
}

solution(4, 2);
solution(5, 2);

/**
 * ✅ 순열 조합 코드상의 차이점
 * 순열(s08_10)
 * → 같은 숫자들 조합이지만 순서만 달라도 다른 것으로 취급(순서 있음)
 *
 * 1) 어떤 요소를 사용했는지를 체크하는 배열이 필요 → dfs에서 노드가 뻗어나갈 때, for문을 순회할때 사용했던 것만 사용안하면 다른것이기 취급하기때문!
 *
 * 조합(s08_14)
 * → 순서에 관계없이 같은 숫자의 조합이면 같은 것으로 취급(순서 없음)
 *
 * 1) dfs에서 노드가 뻗어나갈 때, 사용하는 배열 자체가 달라져야함
 * → dfs의 for문에서 한가지 요소를 사용하는 경우, 그것을 사용하는 모두 경우의 수를 카운팅한 후에 그 다음 요소를 사용하는 것으로 넘어감
 * → 그렇기 때문에 이전에 사용한 요소를 이용해서 만든 경우를 다시 카운팅할 필요가 없음
 * → 이러한 이유로 노드가 뻗어나갈때, 배열이 달라져야함!(혹은 배열을 순회할때 스타팅지점이 달라짐)
 */
