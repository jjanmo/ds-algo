# 연결 리스트(Linked List)

> 연결리스트는 값(value)과 다음 노드에 대한 주소(next, c언어에서는 `포인터` 라고 부른다)로 구성된 노드들을 연결해 놓은 자료구조를 말한다.

## 구조

![구조](/screenshots/linked-list.png)

- head : 연결리스트의 가장 첫번째 노드의 주소값으로, head가 null인 경우, 빈 연결리스트를 의미한다.
- value : 각 노드들이 갖는 데이터
- next : 해당 노드와 연결될 다음 노드의 주소값, next가 null인 경우는 해당 노드가 연결리스트의 가장 마지막 노드라는 것을 알 수 있다.

## 장단점

- 장점
  - 삽입, 삭제시 전체 데이터 구조를 건들지않고도 가능하다.
- 단점
  - 탐색(조회)시 원하는 노드를 찾기위해선 처음부터 노드를 거쳐야한다.(탐색 시간이 배열에 비해 오래 걸린다.) : 연결리스트 O(n) vs 배열 O(1)
  - 주소를 저장하기 때문에 배열에 비해 메모리를 더 많이 사용한다.

## 종류

- Singly Linked List : 위 이미지같은 연결리스트로서 앞으로 내가 구현해보고자 하는 가장 일반적인 연결리스트
- Doubly Linked List : 각 노드가 2개의 주소값(이전 노드 주소, 이후 노드 주소)을 가지고 있는 연결리스트
  ![Doubly Linked List](/screenshots/doubly-linked-list%20.png)

- Circular Linked List : 말 그대로 원형 연결리스트를 말한다. 단일연결리스트에서 마지막 노드의 주소값이 null인 것과 다르게, 원형이기 때문에 마지막 노드의 주소값이 첫번째 노드의 주소값을 가르키게된다.
  ![Circular Linked List](/screenshots/circular-linked-list%20.png)

## 참고자료

- [How to Implement a Linked List in JavaScript](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)
- [Types of Linked List](https://www.geeksforgeeks.org/types-of-linked-list/)
- [연결리스트 with JavaScript](https://overcome-the-limits.tistory.com/16)
