function solution(n, data) {
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] && data[i + 1] && data[i] < data[i + 1]) {
      const min = data[i] > data[i + 1] ? data[i + 1] : data[i];
      sum += min * 5;
      data[i] -= min;
      data[i + 1] -= min;
    } else if (data[i] && data[i + 1] && data[i + 2] && data[i] !== 0 && data[i + 1] !== 0 && data[i + 2] !== 0) {
      const min =
        data[i] > data[i + 1]
          ? data[i + 1] > data[i + 2]
            ? data[i + 2]
            : data[i + 1]
          : data[i] > data[i + 1]
          ? data[i + 1]
          : data[i];
      sum += min * 7;
      data[i] -= min;
      data[i + 1] -= min;
      data[i + 2] -= min;
    } else if (data[i] && data[i + 1] && data[i] !== 0 && data[i + 1]) {
      const min = data[i] > data[i + 1] ? data[i + 1] : data[i];
      sum += min * 5;
      data[i] -= min;
      data[i + 1] -= min;
    }
    sum += data[i] * 3;
    data[i] = 0;
  }

  return sum;
}

console.log(solution(3, [1, 0, 1])); // 6
console.log(solution(5, [1, 1, 1, 0, 2])); // 13
console.log(solution(5, [1, 2, 1, 1])); // 12

/*
해당 문제는 문제 자체를 이해하지 못해서 완전히 잘못된 풀이를 하게 되었다.
(영어로 된 것도 아닌데, 왜 백준문제를 이해하는게 어려운지 잘 모르겠다. 😡)

블로그등의 해설을 통해서 문제를 이해하게 되었다.
해당 문제의 가장 큰 난관이 반례를 힌트를 통해서 보게 되면서 이러한 조건들을 가지고 구현만하면 되는 상황이 되었다.
하지만 이를 구현하는 것도 쉽지않았다.
나름 구현을 했음에도 시간초과로 Accept되지 못하였다.

처음엔 while, 두번째엔 for 로 구현을 해보았지만 둘다 시간초과...
특히 for문인 경우에 O(n) 시간복잡도를 갖게됨에도 시간초과라는 것은 nlog(2N)으로 풀라는 것인지...
도대체 무엇 때문에 그런건지 알 수가 없다.

두번째 생각할 문제는 코드가 뭔가 정돈되지 못한 느낌이다.

그리고 시간초과 때문에 알게 된 내용은 Math.min()/max()가 삼항연산자보다 연산속도가 오래걸린다는 사실...
물론 현재 시간초과의 원인은 이 문제때문은 아닌 것 같다.
삼항연산자로 고쳤음에도 여전히 시간초과...
좀 더 생각해봐야봐야겠다...🔥🔥🔥🔥
*/
