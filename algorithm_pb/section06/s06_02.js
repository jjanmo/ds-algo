// 위 문제의 전제조건
// → 항상 괄호는 () 순서대로 짝을 이룬다

function solution1(string) {
  const stack = [];
  const sArray = string.split('');
  let result = '';
  sArray.forEach((char) => {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      stack.pop(char);
    } else {
      if (stack.length === 0) {
        result += char;
      }
    }
  });

  return result;
}

console.log(solution1('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
console.log(solution1('((H)e(l)lo)Wo(r(l)d'));
