# Data Structure & Algorithm

> 문제를 풀면서 필요했던 내용과 직접 작성한 코드를 바탕으로 정리한다.

> 참고

-   [JavaScript Algorithms Repo](https://github.com/trekhleb/javascript-algorithms/blob/master/README.ko-KR.md)

-   [Algorithms in JavaScript](https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038) 👍

    > 위 블로그에 대해서 간단히 설명하면,

    -   ~~기본적인(위밍업🤐)~~ 40문제에 대한 블로그인 줄 알고 시작했다. 그런데, 나중엔 문제 인덱스가 사라진다😎. 단지 40문제가 아니라는 것을 강조하는 것일 뿐😁.
    -   개발자라면 알아야하는 기본적인 문제와 자료구조, 알고리즘 개념들을 모아놓은 블로그라고 말하는 것이 맞는듯...`무조건 알아야하는 것`이랄까 or `한 번쯤은 반드시 구현해봤어야하는 것들에 대한 모음`이랄까. 쉬운 것도 있고 들어는봤지만 `코드로 생각해보진않은 것`이랄까.
    -   자료구조나 알고리즘을 배워본적이 없는 사람에겐 `출발의 방향성`을 줄 수 있는 블로그라고 생각한다.

-   [Data Structures in JavaScript](https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c)

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

-   <u>array like structure</u>인 **Stack**과 **Queues**. 위 둘은 자료 구조 안에 자료를 넣고 제거하는 방식의 차이점이 있다.
-   <u>노드 기반</u>의 자료 구조인 **Linked Lists**, **Trees**, **Graphs**
-   <u>해쉬 함수</u>에 의해 변경되어 저장되는 **Hash Tables**

<br />

|  #  |    DataStructure     |       Code       |
| :-: | :------------------: | :--------------: |
| 01  | [Stack](ds/stack.md) | [✔](ds/stack.js) |
| 02  | [Queue](ds/queue.md) | [✔](ds/queue.js) |

<br />

## Algorithm
