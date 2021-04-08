# Data Structure & Algorithm

> 문제를 풀면서 필요했던 내용과 직접 작성한 코드를 바탕으로 정리한다.

> 참고

- [JavaScript Algorithms Repo](https://github.com/trekhleb/javascript-algorithms/blob/master/README.ko-KR.md)

- [Algorithms in JavaScript](https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038) 👍

  > 위 블로그에 대해서 간단히 설명하면,

  - ~~기본적인(위밍업🤐)~~ 40문제에 대한 블로그인 줄 알고 시작했다. 그런데, 나중엔 문제 인덱스가 사라진다😎. 단지 40문제가 아니라는 것을 강조하는 것일 뿐😁.
  - 개발자라면 알아야하는 기본적인 문제와 자료구조, 알고리즘 개념들을 모아놓은 블로그라고 말하는 것이 맞는듯...`무조건 알아야하는 것`이랄까 or `한 번쯤은 반드시 구현해봤어야하는 것들에 대한 모음`이랄까. 쉬운 것도 있고 들어는봤지만 `코드로 생각해보진 않은 것`이랄까.
  - 자료구조나 알고리즘을 배워본적이 없는 사람에겐 `출발의 방향성`을 줄 수 있는 블로그라고 생각한다.

- [Data Structures in JavaScript](https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c)

## ~~Basic~~ General

> [Algorithms in JavaScript](https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038) 에 대한 ~~`40문제`~~ 를 풀어보자 🚀

### Problems

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

|  #  |    DataStructure     |       Code       |
| :-: | :------------------: | :--------------: |
| 01  | [Stack](ds/stack.md) | [✔](ds/stack.js) |
| 02  | [Queue](ds/queue.md) | [✔](ds/queue.js) |
| 03  |    Priority Queue    |        ✔         |
| 04  |      LinkedList      |        ✔         |
| 05  |   DoubleLinkedList   |        ✔         |
| 06  |      HashTable       |        ✔         |
| 07  |         Heap         |        ✔         |
| 08  |         Tree         |        ✔         |
| 09  |   BinarySearchTree   |        ✔         |
| 10  |        Graph         |        ✔         |

<br />

## Algorithm

> 자바스크립트로 알고리즘 문제를 풀면서 관련 **개념**을 정리한다.

> 자바스크립트를 통해서 알고리즘을 공부하는 것에 대한 자료가 생각보다 많이 부족하고 스스로 공부하기 벅찬 부분이 있어서 [강의](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4)의 도움을 빌렸다. 그렇기 때문에 내용(문제)에 대한 저작권이 있을 수 있기 때문에 내가 푼 소스 코드와 재가공한 내용에 대해서만 업로드를 할 예정이다. 조금 더 정확하고 자세한 설명을 원한다면 위 강의를 참고하시길...😅 (혹은 제목을 검색하면 비슷한 문제를 찾을 수 있을 것 같다.)

### Section01

> 기본문제

| Index |      Problem      |              My Solution               |           What I Learned            |
| :---: | :---------------: | :------------------------------------: | :---------------------------------: |
|  01   | 세 수 중에 최솟값 | [Code](algorithm/section01/s01_01.js)  |                                     |
|  02   |  삼각형 판별하기  | [Code](algorithm/section01/s01_02.js)  |                                     |
|  03   |     연필개수      | [Code](algorithm/section01/s01_03.js)  |                                     |
|  04   | 1부터 N까지의 합  | [Code](algorithm/section01/s01_04.js)  |                                     |
|  05   |   최솟값 구하기   | [Code](algorithm/section01/s01_05.js)  |                                     |
|  06   |       홀수        | [Code](algorithm/section01/s01_06.js)  |                                     |
|  07   |      10부제       | [Code](algorithm/section01/s01_07.js)  |                                     |
|  08   |    일곱난쟁이     | [Code](algorithm/section01/s01_08.js)  |                                     |
|  09   |     A를 #으로     | [Code](algorithm/section01/s01_09.js)  |                                     |
|  10   |     문자 찾기     | [Code](algorithm/section01/s01_10.js)  |                                     |
|  11   |    대문자 찾기    | [Code](algorithm/section01/s01_11.js)) |                                     |
|  12   |   대문자로 통일   | [Code](algorithm/section01/s01_12.js)  |                                     |
|  13   |   대소문자 변환   | [Code](algorithm/section01/s01_13.js)  | [✔️](algorithm/section01/s01_10.md) |
|  14   |  가장 긴 문자열   | [Code](algorithm/section01/s01_14.js)  |                                     |
|  15   | 가운데 문자 출력  | [Code](algorithm/section01/s01_15.js)  |                                     |
|  16   |   중복문제 제거   | [Code](algorithm/section01/s01_16.js)  |                                     |
|  17   |   중복단어 제거   | [Code](algorithm/section01/s01_17.js)  |                                     |

### Section02

> 1,2차원 탐색

| Index |    Problem     |              My Solution              |
| :---: | :------------: | :-----------------------------------: |
|  01   | 큰 수 출력하기 | [Code](algorithm/section02/s02_01.js) |
|  02   |  보이는 학생   | [Code](algorithm/section02/s02_02.js) |
|  03   |   가위바위보   | [Code](algorithm/section02/s02_03.js) |
|  04   |   점수 계산    | [Code](algorithm/section02/s02_04.js) |
|  05   |  등수 구하기   | [Code](algorithm/section02/s02_05.js) |
|  06   | 격자판 최대합  | [Code](algorithm/section02/s02_06.js) |
|  07   |     봉우리     | [Code](algorithm/section02/s02_07.js) |
