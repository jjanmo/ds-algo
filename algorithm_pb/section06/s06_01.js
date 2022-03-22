function solution1(brackets) {
  const stack = [];
  const bracketArray = brackets.split('');
  bracketArray.forEach((bracket) => {
    if (bracket === '(') stack.push(bracket);
    else stack.pop(bracket);
  });

  return stack.length > 0 ? 'NO' : 'YES';
}

// console.log(solution1('(()(()))(()')); // NO
// console.log(solution1('(())()()((()))')); // YES
// console.log(solution1('(()))')); // NO : 위 풀이의 반례

function solution2(brackets) {
  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    // if (stack.length === 0 && brackets[i] === ')') return 'NO'; // 이 부분을 else에서 체크할 수도 있다.
    if (brackets[i] === '(') stack.push(brackets[i]);
    else {
      const tmp = stack.pop();
      if (!tmp) return 'NO'; // 빈배열에서 pop()을 하면 undefined를 리턴 : 주석처리한 if와 같은 기능
    }
  }

  return stack.length > 0 ? 'NO' : 'YES';
}

console.log(solution2('(()(()))()')); // YES
console.log(solution2('(()(()))(()')); // NO
console.log(solution2('(())()()((()))')); // YES
console.log(solution2('(()))')); // NO
console.log(solution2(')')); // NO
console.log(solution2('(())(()')); // NO
