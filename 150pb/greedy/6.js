function solution(n, data) {
  data.sort((a, b) => b[0] - a[0]);

  let sum = 0;
  let deadlines = []; // index 0 : 없는 것
  for (let i = 0; i < data.length; i++) {
    let dIndex = data[i][1];
    while (dIndex > 0) {
      if (deadlines[dIndex]) {
        dIndex--;
      } else {
        deadlines[dIndex] = true;
        break;
      }
    }

    if (dIndex === 0) continue;
    else {
      sum += data[i][0];
    }
  }

  return sum;
}

console.log(
  solution(7, [
    [20, 1],
    [2, 1],
    [10, 3],
    [100, 2],
    [8, 2],
    [5, 20],
    [50, 10],
  ])
); // 185

console.log(
  solution(5, [
    [10, 1],
    [20, 3],
    [30, 3],
    [40, 5],
    [50, 5],
  ])
); // 150

console.log(
  solution(3, [
    [1, 1],
    [10, 2],
    [10, 2],
  ])
); // 20

/*
해당 문제는 문제 이해가 너무 힘들었다.

우선 내가 이해한 문제에 대한 설명을 해보자.

[ [20, 1], [2, 2], [10, 3], .... ] 이런 식으로 배열이 있다고 하면 첫번째 숫자는 강연료, 두번째 숫자는 데드라인이다.
안타깝게도 이 말이 이해가 안됐다...
[20, 1] 을 설명해보면, 지금부터 1일 안에 대학에 와서 강연을 하면 20을 주겠다 라는 말이다.
[10, 3] 은 지금부터 3일 안에 대학에 와서 강연을 하면 10을 주겠다 라는 말이다.
그리고 또 하나 조건은 모든 강연은 하루를 소비한다. 즉 3일 안에 하루는 무조건 소모되는 것이다.
이 말은 모든 강연은 하루가 걸리기 때문에 그냥 하루로 계산해서 더하면 된다.
직관적으로 생각해보면 [20, 1], [2, 2], [10, 3] 이 3개의 강연은 모두 진행될 수 있다.
첫날에 20, 둘째날에 2, 셋째날에 10이라는 강연이 진행될 수 있다.
그런데 만약 [20, 2] 이 있다고 치면 [20, 2] 과 [2, 2] 은 동시에 진행될 수 없다.
그렇기 때문에 둘 중 큰 강연료를 가진 강의를 진행하는 것이 강연료를 최대로 받을 수 있는 경우의 수가 될 것이다.

이렇게 이해를 하면, 우선 강연료가 높은 순으로 정렬하여 높은 것부터 고르면서 낮은 것 중에서 "데드라인이 중복되는 것을 빼주는 것"이
가장 최적의 해, 가장 최대의 강연료를 벌 수 있는 경우의 수가 된다. →  ✅ 오류

위의 해설은 오류이다.!!!!! 🔥🔥🔥🔥
쓰면서도 약간 꺼림직했는데... 무슨 말인지 살펴보자

만약에 [[10, 2], [20, 2]] 와 같은 경우엔 (위에서 적힌)나의 논리대로면 둘 중에 하나만 강연을 할 수 있다.
하지만 2일이내이기 때문에 둘 다 강연을 할 수 있다. 그리고 그래야만 강연료를 최대로 받을 수 있다.
그래서 직접 데드라인 안에 강연 날짜를 임의로 정하여 채워넣은 방식으로 구현을 해야하는 것 같다.
그럼 이 때 어떻게 채워넣는가??에 대한 문제가 있다.
배열의 "인덱스 + 1" 을 데드라인이라고 보면, 끝에서부터 채워 넣는 것(데드라인이 5라고 하면 5부터 채워넣기) 더 작은 데드라인이 나와도 이를 채울 수 있게된다,
즉, 좀 더 많은 강의를 할 수 있게 된다.
*/