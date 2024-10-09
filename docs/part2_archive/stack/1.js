function solution1(s) {
  const stack = [];
  for (let bracket of s) {
    if (bracket === '(' || bracket === '{' || bracket === '[') {
      stack.push(bracket);
    } else {
      if (stack.length === 0) return false;
      else {
        const poped = stack.pop();
        if (
          (bracket === ')' && poped !== '(') ||
          (bracket === '}' && poped !== '{') ||
          (bracket === ']' && poped !== '[')
        ) {
          return false;
        }
      }
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(solution1('([)]')); // false
console.log(solution1('()')); // true
console.log(solution1('()[]{}')); // true
console.log(solution1('(]')); // false
console.log(solution1('([)]')); // false
console.log(solution1('{[]}')); // true
console.log(solution1('}')); // false
console.log(solution1('{')); // false

/*
hash를 이용해서 풀수 있을거라고 생각해서 구현했지만, 첫 도전 실패!!
→ (다른 풀이 참고) hash의 개념과 stack의 개념을 모두 사용해야한다는 것을 알게 되었다.

*/

function solution2(s) {
  const hash = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];
  for (let bracket of s) {
    if (bracket === '(' || bracket === '[' || bracket === '{') {
      stack.push(bracket);
    } else {
      const poped = stack.pop();
      if (poped !== hash[bracket]) return false; // ✅ hash 로 인해서 이 부분의 로직이 간단해졌다. 😄
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(solution2('([)]')); // false
console.log(solution2('()')); // true
console.log(solution2('()[]{}')); // true
console.log(solution2('(]')); // false
console.log(solution2('([)]')); // false
console.log(solution2('{[]}')); // true
console.log(solution2('}')); // false
console.log(solution2('{')); // false
