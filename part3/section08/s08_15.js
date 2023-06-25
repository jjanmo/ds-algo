// k개를 뽑고 m의 배수
function solution(arr, k, m) {
  const tmp = [];
  const result = [];
  let count = 0;

  const dfs = (sum, target) => {
    if (tmp.length === k) {
      result.push(tmp.join(' ')); // 체크용도

      if (sum % m === 0) {
        console.log(tmp.join(' ')); // 체크용도
        count++;
      }
      return;
    }

    for (let i = 0; i < target.length; i++) {
      tmp.push(target[i]);
      dfs(sum + target[i], target.slice(i + 1));
      tmp.pop();
    }
  };

  dfs(0, arr);

  console.log(result, count); // 전체 조합수, 결과값
}

solution([2, 4, 5, 8, 12], 3, 6);

/**
 * 나는 돌아야할 배열을 인자로 넣어주면서 재귀를 돌았지만.
 * 다른 풀이는 각 재귀당 배열에서 순회의 시작점을 인자로 넣어주었다.
 */
