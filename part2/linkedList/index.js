/**
 * 노드 삽입(insert)
 * 노드 삭제(delete)
 * 노드 순회(traverse)
 * 노드 탐색(find)
 *
 * Single Linked List
 */

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

function printNodes(node) {
  let curNode = node;

  while (curNode) {
    print(curNode.val);
    curNode = curNode.next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {}

  addAtHead() {}

  addAtBack() {}

  addAtAfter() {}

  find() {}

  delete() {}
}
