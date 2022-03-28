function solution1(str) {
  const stack = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {
      stack.pop();
      if (str[i - 1] === '(') {
        count += stack.length;
      } else {
        count++;
      }
    }
  }

  return count;
}

console.log(solution1('()(((()())(())()))(())')); // 17
console.log(solution1('(((()(()()))(())()))(()())')); // 24

// self feedback
// → 닫는 괄호가 2종류가 있다는 사실을 놓침
// → 1) 레이저를 쏘는 닫는 괄호 2) 쇠막대기의 끝을 말하는 닫는 괄호
