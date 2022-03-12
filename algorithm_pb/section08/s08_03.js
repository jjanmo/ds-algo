/*
문제 : 이진 트리가 1~7까지의 노드로 구성되어 있다.

HINT
→ 2 * n : LEFT CHILD
→ 2 * n + 1 : RIGHT CHILD
*/

// 전위 순회
// -> 노드 순서 : 부모 왼쪽 오른쪽
function preorder(n) {
  if (n > 7) return '';

  return `${n}${preorder(2 * n)}${preorder(2 * n + 1)}`;
}

// 중위 순회
// 노드 순서 : 왼쪽 부모 오른쪽
function inorder(n) {
  if (n > 7) return '';

  return `${inorder(2 * n)}${n}${inorder(2 * n + 1)}`;
}

// 후위 순회
// 노드 순서 : 왼쪽 오른쪽 부모
function postorder(n) {
  if (n > 7) return '';

  return `${postorder(2 * n)}${postorder(2 * n + 1)}${n}`;
}

console.log(preorder(1)); // 1245367
console.log(inorder(1)); // 4251637
console.log(postorder(1)); // 4526731
