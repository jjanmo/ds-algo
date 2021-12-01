function solution1(people, limit) {
  people.sort((a, b) => a - b);

  let boat = []; // max length 2
  let count = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i] === 0) continue;

    boat.push(people[i]); // 무조건 집어넣음

    let right = people.length - i - 1;
    while (right > i) {
      if (people[right] && limit - people[i] >= people[right]) {
        boat.push(people[right]);
        people[right] = 0;
        people[i] = 0;
        count++;
        break;
      }
      right--;
    }
    if (boat.length === 1) {
      people[i] = 0;
      count++;
    }
    boat = [];
  }

  return count;
}

// console.log(solution1([70, 50, 80, 50], 100)); // 3
// console.log(solution1([70, 80, 50], 100)); // 3
// console.log(solution1([70, 80, 20, 30], 100)); // 2  ✅
// console.log(solution1([80, 80, 20, 20, 90], 100)); // 3  ✅

// console.log(solution1([20, 20, 80, 40], 100)); // 2  📌
// console.log(solution1([20, 20, 70, 40], 100)); // 2  📌

/*
solution1은 우선 정확성 테스트는 모두 통과하였다.
그런데, 효율성 테스트에서...
for문 안에서 while문을 돌기 때문에 최악의 경우  n * n-1을 돌 수 있기 때문에 시간복잡도가 n^2이 된다.
생각은 했지만, 중간에 continue를 적절히 섞었기때문에 가능하지 않을까 했지만, 역시는 역시다.


생각해보니 이 문제는 보트 수의 최소값을 구하라고 하기 때문에 그리디 알고리즘도 요구하고 있지만,
무게 합이라는 일정 상수 값을 주기 때문에 투포인트 알고리즘도 같이 적용할 수 있다는 생각이 들었다.
solution1 역시 투포인트 알고리즘의 개념을 약간 이용하려고 한 것이지만,
정확히는 O(n) 으로 모든 것이 적용될 수 있다.


self feedback

1.
보트에 가장 많은 사람은 채울수 있는 방법을 생각했지만, 이 부분은 문제를 잘못 읽은 것!! ← 주의🔥
문제에서 최대 2명의 사람이 탈 수 있다고 명시해줌

2.
보트 2명을 태울 수 있는 경우의 수는 가장 작은 무게 + 그것에 매칭되는 무게 라고만 생각하여 구현하여서 문제가 많이 생겼다.
예를 들어 제한무게가 100이라면 나는 항상 30과 70처럼 딱 떨어지는 경우만 생각했다.
하지만 30과 60도 가능하고 30과 50도 가능했다.  그것에 대한 예시 중에 📌 부분이다.
이렇게 생각하니 조건을 좀 더 폭넓고 일관성있게 줄 수 있었다.

3. 투포인트 알고리즘
사용해야한다는 걸 풀다보니 알게 되었는데,
정확히 구현한 것은 효율성을 한 번 떨어지고 나서였다.
정렬과 배열 그리고 일정량에 대한 조건이 나오면 한번쯤 생각해보자.
*/

function solution2(people, limit) {
  people.sort((a, b) => a - b);

  let count = 0;

  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    count++;
  }

  return count;
}

console.log(solution2([70, 50, 80, 50], 100)); // 3
console.log(solution2([70, 80, 50], 100)); // 3
console.log(solution2([70, 80, 20, 30], 100)); // 2  ✅
console.log(solution2([80, 80, 20, 20, 90], 100)); // 3  ✅
console.log(solution2([20, 20, 80, 40], 100)); // 2  ✅
console.log(solution2([20, 20, 70, 40], 100)); // 2  ✅
