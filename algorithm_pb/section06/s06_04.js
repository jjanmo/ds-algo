// 후위식 연산
// → 읽는 방법 : 연산자가 등장하면 연산자 앞의 두 수를 등장한 연산자로 연산한다. 이와 같은 방법이 계산을 마칠때까지 반복된다.
function solution1(str) {
  const stack = [];
  const operator = '+-*/';
  for (let i = 0; i < str.length; i++) {
    if (operator.includes(str[i])) {
      const tmp2 = stack.pop();
      const tmp1 = stack.pop();
      const result = calculate(tmp1, tmp2, str[i]);
      stack.push(result);
    } else {
      stack.push(Number(str[i]));
    }
  }

  return Number(stack.join(''));
}

function calculate(num1, num2, op) {
  switch (op) {
    case '+': {
      return num1 + num2;
    }
    case '-': {
      return num1 - num2;
    }
    case '*': {
      return num1 * num2;
    }
    case '/': {
      return num1 / num2;
    }
    default: {
    }
  }
}

console.log(solution1('352+*9-')); // 12
console.log(solution1('472+*')); // 36
