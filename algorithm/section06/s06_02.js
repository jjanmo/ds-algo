function solution(string) {
  const stack = [];
  const sArray = string.split('');
  let result = '';
  sArray.forEach(char => {
    console.log(char, stack);
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      stack.pop(char);
    } else {
      if (stack.length === 0) {
        // console.log(stack.length, char);
        result += char;
      }
    }
  });

  return result;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
console.log(solution('((H)e(l)lo)Wo(r(l)d'));

// Q. 괄호의 순서는 항상 ( → ) 인가? 만약에  ) ( 이런 경우는 존재하지 않는가?
