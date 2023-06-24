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

// console.log(preorder(1)); // 1245367
// console.log(inorder(1)); // 4251637
// console.log(postorder(1)); // 4526731

//---

// 전위순회 출력 : 1 2 4 5 3 6 7
// preorder : 이진트리 유닛(삼각형 3개 노드) 기준 부모를 먼저 탐색하는 것
function review1(n) {
  let result = '';

  const dfs = (l) => {
    if (l > n) return;

    result += l + ' ';
    dfs(2 * l);
    dfs(2 * l + 1);
  };

  dfs(1);

  return result;
}

console.log('preorder', review1(7));

// 중위순회 출력 : 4 2 5 1 6 3 7
// inorder : 이진트리 유닛(삼각형 3개 노드) 기준 부모를 중간에 탐색하는 것
function review2(n) {
  let result = '';

  const dfs = (l) => {
    if (l > n) return;

    dfs(2 * l); // 2 * l => 왼쪽 노드를 의미
    result += l + ' ';
    dfs(2 * l + 1); // 2 * l => 오른쪽 노드를 의미
  };

  dfs(1);

  return result;
}

console.log('inorder', review2(7));

// 후위순회 출력 : 4 5 2 6 7 3 1
// postorder :  이진트리 유닛(삼각형 3개 노드) 기준 부모를 마지막에  탐색하는 것
function review3(n) {
  result = '';

  const dfs = (l) => {
    if (l > n) return;

    dfs(2 * l);
    dfs(2 * l + 1);
    result += l + ' ';
  };

  dfs(1);

  return result;
}

console.log('postoreder', review3(7));
