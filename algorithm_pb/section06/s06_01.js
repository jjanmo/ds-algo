function solution(brackets) {
  const stack = [];
  const bracketArray = brackets.split('');
  bracketArray.forEach(bracket => {
    if (bracket === '(') stack.push(bracket);
    else stack.pop(bracket);
  });

  return stack.length > 0 ? 'NO' : 'YES';
}

console.log(solution('(()(()))(()'));
console.log(solution('(())()()((()))'));
