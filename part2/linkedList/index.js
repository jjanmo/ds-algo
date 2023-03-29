/**
 * 노드 삽입(insert)
 * 노드 삭제(delete)
 * 노드 순회(traverse)
 * 노드 탐색(find)
 *
 * Single Linked List
 *
 * https://codedragon.tistory.com/6113
 * 자바의 내장된 연결리스트의 메소드 참고
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
  }

  /**
   * @description 연결리스트 끝에 해당 노드를 추가
   * @param {*} val 노드의 데이터
   */
  add(val) {
    const node = new Node(val);
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  // insert()
  // remove()
  // find()
  // findPrevious()
  // size()

  /**
   * @description 연결리스트 순회(모든 노드에 접근, 여기서는 로그를 찍는다)
   */
  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList(10);
linkedList.add(20);
linkedList.add(30);

linkedList.traverse();
