// 문제 이해가 중요하다.
// 이해를 하면 쉽게 풀수 있지만, 이해를 못하면 한없이 어려운 문제.

function solution(N, weights) {
  weights.sort((a, b) => b - a);

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < weights.length; i++) {
    const tmp = weights[i] * (i + 1);
    if (tmp > max) max = tmp;
  }

  return max;
}
console.log(solution(2, [10, 15])); // 20
console.log(solution(5, [20, 5, 15, 30, 45])); // 60

/*
내가 헷갈린 부분
→ 1) k개의 로프를 사용하여 중량이 w인 물체를 들어올릴 때, 각각의 로프에는 모두 고르게 w/k 만큼의 중량이 걸리게 된다.
이 조건이기 때문에(예시 1의 경우) 각각 5와 7.5가 걸리니까 20이 아니라 12.5가 아닌가 라고 생각을 했다.
문제를 잘보면, 각각 로프에 고르게 걸리고 여기서 말한 w는 정해진 값이 아니라 최대가 될 수 있게 만드는 것이다.
그렇기 때문에 우리는 각각의 로프의 최대 중량이라고 생각하고 계산을 해주면 된다.
- 물체 최대 중량이 10kg라고 하면 각각 5kg씩 걸리면 총 10kg아닌가
- 물체 최대 중량인 15라고 하면 각각 7.5Kg씩 걸리면 총 15kg아닌가
라고 생각했다. 그런데 여기서 첫번째는 가능한 시나리오지만, 두번째는 불가능하다. 왜냐하면 총 15kg인데 이것은 이미 로프의 최대 중량(10kg)을 넘어섰기 때문이다.
결국, n개의 로프 중에서 가장 작은 중량을 버틸수 있는 걸로 계산을 해야만 가능한 시나리오가 나온다.
그런데 여기서 왜 내가 생각한 답과 실제 답이 다를까? 이 이유는 아래에 있다.

→ 2)  이 로프들을 이용하여 "들어올릴 수 있는 물체의 최대 중량"을 구해내는 프로그램을 작성
들어올릴 수 있는 물체의 최대 중량을 말한다. 즉, 위에서 계산한 값을 다시 보면, 실제 물체의 중량을 나타내기 때문에
첫번째는 10 -> 20, 두번째는 15 -> 30 이라고 해야 여기서 원하는 답이 된다.
*/