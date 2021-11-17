/*
스택의 가장 대표적인 문제
괄호 관련 문제
→ 괄호의 균형이 맞는지 확인(괄호 짝 확인)

input : (, ), {, }, [, ] 로 구성된 괄호
curly {}, square [], round ()

ouput : 짝이 맞으면 true, 그렇지 않으면 false

*/

function solution1(string) {
  const curlyStack = [];
  const squareStack = [];
  const roundStack = [];

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    switch (bracket) {
      case '{': {
        curlyStack.push(bracket);
        break;
      }
      case '[': {
        squareStack.push(bracket);
        break;
      }
      case '(': {
        roundStack.push(bracket);
        break;
      }
      case '}': {
        curlyStack.pop(bracket);
        break;
      }
      case ')': {
        squareStack.pop(bracket);
        break;
      }
      case ']': {
        roundStack.pop(bracket);
        break;
      }
      default: {
      }
    }
  }

  if (curlyStack.length === 0 && squareStack.length === 0 && roundStack.length === 0) return true;

  return false;
}

console.log(solution1('{[()]}')); // true
console.log(solution1('{[([({))]}}')); //false
console.log(solution1(')(')); //false
console.log(solution1('{)')); //false ✅

console.log('------------------');

function solution2(string) {
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '{' || string[i] === '[' || string[i] === '(') {
      stack.push(string[i]);
    } else {
      if (stack.length === 0) return false;
      else {
        const bracket = stack.pop(string[i]); // stack에서 꺼낸 값
        if (
          (bracket === '{' && string[i] !== '}') ||
          (bracket === '[' && string[i] !== ']') ||
          (bracket === '(' && string[i] !== ')')
        )
          return false;
      }
    }
  }

  return !stack.length; // length가 0 이다 → falsy → !falsy === true
}

console.log(solution2('{[()]}')); // true
console.log(solution2('{[([({))]}}')); //false
console.log(solution2(')(')); //false
console.log(solution2('{)')); //false
console.log(solution2('(')); //false
console.log(solution2('}')); //false
