# Algorithm 150

> 알고리즘 문제 150개 풀기 챌린지

## Motivation

<details>
<summary>장문 주의 🤪</summary>

코딩 테스트(코테)를 여러 번 보면서, 광탈 상황을 경험하면서 도대체 어떻게 하면 합격할 수 있을까에 대해서 고민을 하게 되었다. 공식적인 기록(온라인 저지 플랫폼에 남은 문제 기록)으로 내가 코테 문제를 연습한 문제 수가 거의 450문제는 되는 것으로 확인되었다.(450문제가 적으면 적지만 일년 반정도의 기간을 고려하면 하루에 한문제 정도 푼 것 같다.) 그런데 왜 나는 코테에서 문제를 풀지 못하는가? 에 대한 해답을 찾고 싶었다.

지금까지 내가 문제를 풀어왔던 스타일은 1문제를 풀어도 정확히 풀어보려고 하였다. 최대한 힌트 같은 것 없이 내 힘으로 문제를 이해하고 로직을 구현하려고 노력하였다. 한 문제를 가지고 몇 시간이고 며칠이고 고민했던 적도 있었다. 이러한 방법이 프로그래밍 실력 향상에는 도움이 될 수 있다. 하지만 코테를 위한 방법이 아니였다.

모든 코테 준비 방법 관련 영상에서 하는 말은 `코테 문제의 유형을 익혀서 문제에 익숙해져라`와 `카테고리 별 풀이 방법을 익혀라` 였다. 이런 말을 들으니 난감하였다. 사실 알고리즘 풀이법 혹은 문제별 유형 정리 같은 부분을 한 번도 해본 적이 없었기 때문이다. (오히려 알고리즘 개념 자체를 이해하는데 포커스를 뒀던 것 같다.) 문제를 보고 어떻게 풀어갈지를 생각하고 그에 맞게 문제를 풀었을 뿐이였다. 체계적으로 정리하면서 해본 적이 없었기에 `어떤 문제를 보면 아 이 문제는 이렇게 접근해서 풀면 되는구나` 라는 생각할 수 없었다. 코테 준비는 마치 수능 수학을 준비하듯 해야 했던 것 같다. 그리고 코테에서 많이 나오는 유형은 정해져있고 그러한 유형에만 익숙해지고 그 문제만이라도 정확히 풀어내면 사실 코테를 통과하는게 그렇게 큰 어려움은 아니라고 한다.

내가 직접 코테를 보면서 실제로 코테 정답률과 응시율 등을 비교해 본 결과, 이 말에 절대 공감하게 되었다. 실제로 이번에 본 코테(프로그래머스 시행)에서 약 1100명 정도가 응시를 했고 총 문제는 3문제였다. 정렬문제, 그래프 문제, 그리디 문제(?)로 출제된 것으로 보인다. 이 코테에서는 실시간으로 제출자와 정답자를 확인할 수 있었다. 그런데 놀랍게도 가장 쉬운 문제에 대한 정답자가 300~400명밖에 되지 않았다. 두번째로 어려웠던 문제는 200명정도, 마지막 문제는 정답자가 100명도 채 안되었다. 또한 100위권까지 랭크를 확인할 수 있었는데, 이 결과를 보고 약간 충격😱 을 느끼고 희망😃 을 보았다. `100위 안에 든 사람 중에 3문제를 완벽하게 다 푼 사람은 10명도 채 되지 않았다`. 2 ~ 2.5문제정도로 생각하면 100위권 안에 들었고, 아마도 `2문제만 클리어하면 200위권에는 충분히 들지 않을까` 하는 생각을 들었다. 이 정도면 코테를 통과하는게 엄청 어려운 것은 아니구나 하는 확신을 갖게되었다.(현재는 나는 1 ~ 1.5문제 정도를 해결할 수 있다.)

결론적으로 방향성을 바꿔서 정확히 `코테 통과`를 목표해서 자주 나오는 유형별 문제를 정리하며 익숙해지기로 했다. 자주 나오는 유형 3가지인 `그리디 알고리즘`, `탐색 알고리즘(DFS/BFS 포함)`, `동적 프로그래밍(초중급 난이도 수준)`를 각각 50문제씩 150문제를 `남은 2021년`(이 글을 쓰는 날이 21년 11월 21일이기에 대략 40일정도)동안 풀고 기록할 것이다. 문제에 사용할 플랫폼은 LeetCode, 백준, 프로그래머스를 주로 사용할 것이다.

도오전~~~🚀

<br />

※ 참고

운이 좋았는지 어쨌는지 위에서 언급한 코테에서 합격하였다. 처음으로 코테에서 합격해보는 것이라 기분은 좋지만, 코테에서 내가 원하던 목표를 달성하기 위해선 아직 갈 길이 멀다.
ㅎㅇㅌ 🔥

</details>

<br />

[코테 준비를 위한 참고 영상 링크](https://www.youtube.com/watch?v=ukkLCl9yBvE&t=808s)

## Problems

> `LC` → LEET Code | `PG` → Programmers | `BJ` → BaekJoon

| Index |   Date   | Category |                                                    Problem                                                    |          Solution           |   Check   |
| :---: | :------: | :------: | :-----------------------------------------------------------------------------------------------------------: | :-------------------------: | :-------: |
|  01   | 21.11.21 |  Greedy  |            [LC: maximum-units-on-a-truck](https://leetcode.com/problems/maximum-units-on-a-truck)             | [Code](/150pb/greedy/1.js)  |           |
|  02   | 21.11.22 |  Greedy  | [LC : minimum-deletion-cost](https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/) | [Code](/150pb/greedy/2.js)  |    ⭐️    |
|  03   | 21.11.22 |  Greedy  |                [LC : two-city-scheduling](https://leetcode.com/problems/two-city-scheduling/)                 | [Code](/150pb/greedy/3.js)  |    ⭐️    |
|  04   | 21.11.22 |  Greedy  | [LC : split-a-string-in-balanced-strings](https://leetcode.com/problems/split-a-string-in-balanced-strings/)  | [Code](/150pb/greedy/4.js)  |    ⭐️    |
|  05   | 21.11.23 |  Greedy  |                  [LC : maximum-69-number](https://leetcode.com/problems/maximum-69-number/)                   | [Code](/150pb/greedy/5.js)  |           |
|  06   | 21.11.24 |  Greedy  |                             [BJ : 순회강연](https://www.acmicpc.net/problem/2109)                             | [Code](/150pb/greedy/6.js)  |    ⭐️    |
|  07   | 21.11.25 |  Greedy  |                             [BJ : 신입사원](https://www.acmicpc.net/problem/1946)                             | [Code](/150pb/greedy/7.js)  |    ⭐️    |
|  08   | 21.11.26 |  Greedy  |                           [BJ : 알바생 강호](https://www.acmicpc.net/problem/1758)                            | [Code](/150pb/greedy/8.js)  |           |
|  09   | 21.11.26 |  Greedy  |                          📌 [BJ : 라면 사기](https://www.acmicpc.net/problem/18185)                           | [Code](/150pb/greedy/9.js)  | ⭐️⭐️⭐️ |
|  10   | 21.11.27 |  Greedy  |                              [BJ : 보물 ](https://www.acmicpc.net/problem/1026)                               | [Code](/150pb/greedy/10.js) |           |
|  11   | 21.11.27 |  Greedy  |                          [BJ : 잃어버린 괄호 ](https://www.acmicpc.net/problem/1541)                          | [Code](/150pb/greedy/11.js) |           |
|  12   | 21.11.28 |  Greedy  |                           [BJ : 전자레인지 ](https://www.acmicpc.net/problem/10162)                           | [Code](/150pb/greedy/12.js) |           |
|  13   | 21.11.28 |  Greedy  |                            [BJ : 수들의 합 ](https://www.acmicpc.net/problem/1789)                            | [Code](/150pb/greedy/13.js) |           |
|  14   | 21.11.29 |  Greedy  |                        [BJ : 세탁소 사장 동혁 ](https://www.acmicpc.net/problem/2720)                         | [Code](/150pb/greedy/14.js) |           |
|  15   | 21.11.29 |  Greedy  |                             [BJ : 주유소 ](https://www.acmicpc.net/problem/13305)                             | [Code](/150pb/greedy/15.js) |  ⭐️⭐️   |
|  16   | 21.11.30 |  Greedy  |                [PG : 큰 수 만들기 ](https://programmers.co.kr/learn/courses/30/lessons/42883)                 | [Code](/150pb/greedy/16.js) | ⭐️⭐️⭐️ |
|  17   | 21.12.01 |  Greedy  |                  [PG : 구명보트 ](https://programmers.co.kr/learn/courses/30/lessons/42885)                   | [Code](/150pb/greedy/17.js) |    ⭐️    |
