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
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  /**
   * @description 연결리스트 끝에 해당 노드를 추가
   * @param {*} value 노드의 데이터
   */
  add(value) {
    const node = new Node(value);
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  /**
   * @description 지정된 인덱스에 노드를 추가
   * @param {number} index
   * @param {*} value
   */
  insert(index, value) {
    const node = new Node(value);
    let current = this.head;
    let _index = 0;

    while (current) {
      if (index - 1 === _index) {
        node.next = current.next;
        current.next = node;
        break;
      }

      current = current.next;
      _index++;
    }
  }

  /**
   * @description 주어진 인덱스에 해당하는 노드 찾기
   * @param {number} index
   * @returns 지정된 인덱스의 노드 or null
   */

  findByIndex(index) {
    let current = this.head;
    let _index = 0;

    while (current) {
      if (index === _index) return current;

      current = current.next;
      _index++;
    }

    return null;
  }

  /**
   * @description 주어진 데이터(value)를 갖는 노드 찾기
   * @param {*} value
   * @returns 주어진 데이터를 가진 노드 or null
   */
  findByvalue(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return current;

      current = current.next;
    }

    return null;
  }

  // remove()

  // findPrevious()
  // size()

  /**
   * @description 연결리스트 순회(모든 노드에 접근, 여기서는 로그를 찍는다)
   */
  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);
linkedList.insert(2, 25);

linkedList.traverse();

const target1 = linkedList.findByIndex(2);
console.log(target1);
const target2 = linkedList.findByIndex(9);
console.log(target2);

const target3 = linkedList.findByvalue(20);
console.log(target3);
const target4 = linkedList.findByvalue(55);
console.log(target4);
