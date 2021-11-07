# Data Structure & Algorithm

> 자료구조와 알고리즘을 공부하면서 직접 생각하고 고민한 내용을 코드를 통해서 기록하며, 새롭게 알아가는 내용, 정리하는 내용 또한 나의 언어로 기록한다.

<br />
<details>
<summary style='font-size:18px'>참고 자료 </summary>

- 🗒 [Algorithms in JavaScript](https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038) 👍

  > 위 블로그에 대해서 간단히 설명하면,

  - 대략 40문제정도로 이루어진 블로그로서, 사실 처음에는 간단하고 쉬운 문제들이라고 생각했다. 하지만 이는 오산이였고, 뒤로갈수록 좀 더 생각하게 만드는 문제들이였다.(물론 내가 알린이 😢 이기 때문에 그럴 수도 있다.)

  - 블로그의 문제는 라이브 코딩 인터뷰에서 마주할법한 문제들에 대한 모음이다. 개인적으로 개발자라면 알아야하는 기본적인 문제와 자료구조, 알고리즘 개념들을 모아놓은 자료구조 & 알고리즘 콜렉션 블로그라고 생각한다.

  - `무조건 알아야하는 것`이기 때문에 `한 번도 구현해보지 않았다면...` or `들어는봤지만 코드로 생각해보진 않았다면...` 이번 기회에 츄라이 해보시길. 그리 오래 걸리지 않을겁니다. HAHAHA 😃

  - 자료구조나 알고리즘에 도전해본 적이 없는 사람에게 추천해줄 수 있는 블로그라고 생각한다.

- 🗒 [Data Structures in JavaScript](https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c)

- 🗒 [6 JavaScript data structures you must know](https://www.educative.io/blog/javascript-data-structures#questions)

- 📺 [파이썬으로 배우는 알고리즘 기초](https://www.youtube.com/playlist?list=PLHqxB9kMLLaPOp0jh591QhPvbz4H266SS)

- 📕 [알고리즘 기초](http://www.yes24.com/Product/Goods/37582683?OzSrank=1)

- 📺 [자바스크립트 알고리즘 문제풀이](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4)

</details>
<br />

---

# Basic

> `Basic`이라고 쓰고 `기본`이라고 읽는다. 🔥

## Problems

> 참고 자료의 [첫번째 블로그](https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038) 에 나온 문제들을 풀어본다.

| #Problem |                               Themes                               |                Code                 |
| :------: | :----------------------------------------------------------------: | :---------------------------------: |
|  Intro   |                      [Prime](basic/prime.md)                       |         [✔](basic/prime.js)         |
|    01    |                          String Reversal                           |    [✔](basic/string-reveral.js)     |
|    02    |                             Palindrome                             |      [✔](basic/palindrome.js)       |
|    03    |                          Integer Reversal                          |   [✔](basic/integer-reversal.js)    |
|    04    |                             Fizz Buzz                              |       [✔](basic/fizzbuzz.js)        |
|    05    |                           Max Character                            |     [✔](basic/max-character.js)     |
|    06    |                              Anagrams                              |       [✔](basic/anagrams.js)        |
|    07    |                               Vowels                               |        [✔](basic/vowels.js)         |
|    08    |                           Array Chunking                           |    [✔](basic/array-chunking.js)     |
|    09    |                           Reverse Array                            |     [✔](basic/reverse-array.js)     |
|    10    |                           Reverse Words                            |     [✔](basic/reverse-words.js)     |
|    11    |                           Capitalization                           |    [✔](basic/capitalization.js)     |
|    12    |              [Caesar Cipher](basic/caesar-cipher.md)               |     [✔](basic/caesar-cipher.js)     |
|    13    |                [Ransom Note](basic/ransom-note.md)                 |      [✔](basic/ransom-note.js)      |
|    14    |        [Mean, Median, and Mode](basic/mean-median-mode.md)         |   [✔](basic/mean-median-mode.js)    |
|    15    |                    [Two Sum](basic/two-sum.md)                     |        [✔](basic/two-sum.js)        |
|    16    |                 [Max Profit](basic/max-profit.md)                  |      [✔](basic/max-profit.js)       |
|    17    | [Sieve of Eratosthenes](basic/prime.md/#방법3-에라토스테네스의-체) | [✔](basic/sieve-of-eratosthenes.js) |
|    18    |                             Fibonacci                              |       [✔](basic/fibonacci.js)       |
|    19    |         [Memoized Fibonacci](basic/memoized-fibonacci.md)          |  [✔](basic/memoized-fibonacci.js)   |
|    20    |                             Staircase                              |       [✔](basic/staircase.js)       |
|    21    |                              Pyramid                               |        [✔](basic/pyramid.js)        |
|    22    |                           Matrix Spiral                            |     [✔](basic/matrixSpiral.js)      |

<br />

## Data Structure

> Data Structure is <u>the `building blocks` of algorithms</u>

> 다양한 자료 구조가 존재한다. 각각의 자료 구조의 특징을 알아보고 그것을 `언제(When)`, `왜(Why)`사용하는지에 대해서 알아보자.

> 자료 구조는 크게 3가지로 구분한다.

- <u>array like structure</u>인 **Stack**과 **Queues**. 위 둘은 자료 구조 안에 자료를 넣고 제거하는 방식의 차이점이 있다.
- <u>노드 기반</u>의 자료 구조인 **Linked Lists**, **Trees**, **Graphs**
- <u>해쉬 함수</u>에 의해 변경되어 저장되는 **Hash Tables**

<br />

|  #  |    DataStructure     |       Code       |     |
| :-: | :------------------: | :--------------: | --- |
| 01  | [Stack](ds/stack.md) | [✔](ds/stack.js) |
| 02  | [Queue](ds/queue.md) | [✔](ds/queue.js) |
| 03  |    Priority Queue    |        ✔         | ❌  |
| 04  |      LinkedList      |        ✔         |
| 05  |   DoubleLinkedList   |        ✔         |
| 06  |      HashTable       |        ✔         |
| 07  |         Heap         |        ✔         | ❌  |
| 08  |         Tree         |        ✔         |
| 09  |   BinarySearchTree   |        ✔         | ❌  |
| 10  |        Graph         |        ✔         |     |

<br />

---

<br />

# Algorithm

## 개념정리

> 알고리즘에 대한 이론을 정리한다. 하지만, 너무 이론에만 매몰되지않고 구현 중심의 이론을 정리해본다.

> 정리는 [파이썬으로 배우는 알고리즘 기초](https://www.youtube.com/playlist?list=PLHqxB9kMLLaPOp0jh591QhPvbz4H266SS) 강의와 [알고리즘 기초](http://www.yes24.com/Product/Goods/37582683?OzSrank=1) 책을 기반으로 이루어진다.

### Chapter01

| Index | Problem  |               My Solution               | What I Learned |
| :---: | :------: | :-------------------------------------: | :------------: |
|  01   | 순차검색 | [Code](/algorithm/chapter01/ch01_01.js) |                |
|  02   | 교환정렬 | [Code](/algorithm/chapter01/ch01_02.js) |                |

<br />

## Problems

> 자바스크립트로 알고리즘 문제 풀기 🚀

> 자바스크립트를 통해서 알고리즘을 공부하는 것에 대한 자료가 생각보다 많이 부족하고 스스로 공부하기 벅찬 부분이 있어서 [강의](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4)의 도움을 빌렸다. 그렇기 때문에 내용(문제)에 대한 저작권이 있을 수 있기 때문에 내가 푼 소스 코드와 재가공한 내용에 대해서만 업로드를 할 예정이다. 조금 더 정확하고 자세한 설명을 원한다면 위 강의를 참고하시길...😅 (혹은 제목을 검색하면 비슷한 문제를 찾을 수 있을 것 같다.)

### Section01

> 기본문제

| Index |      Problem      |               My Solution                |             What I Learned             |
| :---: | :---------------: | :--------------------------------------: | :------------------------------------: |
|  01   | 세 수 중에 최솟값 | [Code](algorithm_pb/section01/s01_01.js) |                                        |
|  02   |  삼각형 판별하기  | [Code](algorithm_pb/section01/s01_02.js) |                                        |
|  03   |     연필개수      | [Code](algorithm_pb/section01/s01_03.js) |                                        |
|  04   | 1부터 N까지의 합  | [Code](algorithm_pb/section01/s01_04.js) |                                        |
|  05   |   최솟값 구하기   | [Code](algorithm_pb/section01/s01_05.js) |                                        |
|  06   |       홀수        | [Code](algorithm_pb/section01/s01_06.js) |                                        |
|  07   |      10부제       | [Code](algorithm_pb/section01/s01_07.js) |                                        |
|  08   |    일곱난쟁이     | [Code](algorithm_pb/section01/s01_08.js) |                                        |
|  09   |     A를 #으로     | [Code](algorithm_pb/section01/s01_09.js) |                                        |
|  10   |     문자 찾기     | [Code](algorithm_pb/section01/s01_10.js) |                                        |
|  11   |    대문자 찾기    | [Code](algorithm_pb/section01/s01_11.js) | [✔️](algorithm_pb/section01/s01_11.md) |
|  12   |   대문자로 통일   | [Code](algorithm_pb/section01/s01_12.js) |                                        |
|  13   |   대소문자 변환   | [Code](algorithm_pb/section01/s01_13.js) |                                        |
|  14   |  가장 긴 문자열   | [Code](algorithm_pb/section01/s01_14.js) |                                        |
|  15   | 가운데 문자 출력  | [Code](algorithm_pb/section01/s01_15.js) |                                        |
|  16   |   중복문제 제거   | [Code](algorithm_pb/section01/s01_16.js) |                                        |
|  17   |   중복단어 제거   | [Code](algorithm_pb/section01/s01_17.js) |                                        |

### Section02

> 1,2차원 탐색

| Index |    Problem     |               My Solution                |             What I Learned             |
| :---: | :------------: | :--------------------------------------: | :------------------------------------: |
|  01   | 큰 수 출력하기 | [Code](algorithm_pb/section02/s02_01.js) |                                        |
|  02   |  보이는 학생   | [Code](algorithm_pb/section02/s02_02.js) |                                        |
|  03   |   가위바위보   | [Code](algorithm_pb/section02/s02_03.js) |                                        |
|  04   |   점수 계산    | [Code](algorithm_pb/section02/s02_04.js) |                                        |
|  05   |  등수 구하기   | [Code](algorithm_pb/section02/s02_05.js) |                                        |
|  06   | 격자판 최대합  | [Code](algorithm_pb/section02/s02_06.js) |                                        |
|  07   |   ⭐️ 봉우리   | [Code](algorithm_pb/section02/s02_07.js) | [✔️](algorithm_pb/section02/s02_07.md) |

### Section03

> 문자열 탐색

| Index |      Problem       |               My Solution                |
| :---: | :----------------: | :--------------------------------------: |
|  01   |    회문 문자열     | [Code](algorithm_pb/section03/s03_01.js) |
|  02   |  유효한 팰린드롬   | [Code](algorithm_pb/section03/s03_02.js) |
|  03   |    숫자만 추출     | [Code](algorithm_pb/section03/s03_03.js) |
|  04   | 가장 짧은 문자거리 | [Code](algorithm_pb/section03/s03_04.js) |
|  05   |    문자열 압축     | [Code](algorithm_pb/section03/s03_05.js) |

### Section04

> 문자열 탐색

| Index |     Problem      |               My Solution                |
| :---: | :--------------: | :--------------------------------------: |
|  01   |   자릿수의 합    | [Code](algorithm_pb/section04/s04_01.js) |
|  02   |   뒤집은 소수    | [Code](algorithm_pb/section04/s04_02.js) |
|  03   |  ⭐️⭐️ 멘토링   | [Code](algorithm_pb/section04/s04_03.js) |
|  04   | ⭐️⭐️ 졸업 선물 | [Code](algorithm_pb/section04/s04_04.js) |
|  05   |   K번째 큰 수    | [Code](algorithm_pb/section04/s04_05.js) |

### Section05

> 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

| Index |      Problem       |               My Solution                |
| :---: | :----------------: | :--------------------------------------: |
|  01   |   두 배열 합치기   | [Code](algorithm_pb/section05/s05_01.js) |
|  02   |  공통 원소 구하기  | [Code](algorithm_pb/section05/s05_02.js) |
|  03   |  연속 부분 수열1   | [Code](algorithm_pb/section05/s05_03.js) |
|  04   |  연속 부분 수열2   | [Code](algorithm_pb/section05/s05_04.js) |
|  05   |     최대 매출      | [Code](algorithm_pb/section05/s05_05.js) |
|  06   |     학생 회장      | [Code](algorithm_pb/section05/s05_06.js) |
|  07   |      아나그램      | [Code](algorithm_pb/section05/s05_07.js) |
|  08   | 모든 아나그램 찾기 | [Code](algorithm_pb/section05/s05_08.js) |

### Section06

> 자료구조(스택, 큐)

| Index |   Problem    |               My Solution                |
| :---: | :----------: | :--------------------------------------: |
|  01   | 올바른 괄호  | [Code](algorithm_pb/section05/s06_01.js) |
|  02   | 괄호문자제거 | [Code](algorithm_pb/section05/s06_02.js) |
