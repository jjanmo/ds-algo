function solution(number, k) {
  const biggest = [];

  let count = 0;

  for (let i = 0; i < number.length; i++) {
    while (count < k && biggest[biggest.length - 1] < number[i]) {
      biggest.pop();
      count++;
    }

    if (biggest[biggest.length - 1] >= number[i] && biggest.length === number.length - k) {
      count++;
      continue;
    }
    biggest.push(number[i]);
  }

  return biggest.join('');
}

console.log(solution('1924', 2)); // "94"
console.log(solution('1231234', 3)); // "3234"
console.log(solution('4177252841', 4)); // "775841"
console.log(solution('14', 1)); // "4"

console.log(solution('41', 1)); // "4"
console.log(solution('99991', 3)); // "99"
console.log(solution('111119', 3)); // "119"

/*
앞에서 가장 큰 숫자가 전체적으로 가장 큰 수이다.
→ 앞에서부터 검사해서 큰 수만 남긴다.

처음에 while문 안에서 비교하여 넣어주고 빼주고는 반복하는 로직을 구현했는데, 생각보다 오류가 많았다.
내가 생각할 때는, 내가 생각한 예제들은 다 통과했지만, 그 외의 다양한 반례들이 있었던듯...

그래서 힌트 이용하였다.;;; 맨 위의 로직을 구현하기 위해서 약간의(?) 스택의 개념을 이용하더라...
스택에 넣고 스택의 top과 비교하여 큰 수는 남기고 작은 수는 지우는 방식

self feedback
😭 쉽지 않다...
1) 내가 생각한 방식을 구현하더라도 그 방법이 통과하지 못하면 다른 방법으로 생각하여 구현해야하는데 그 과정이 쉽지 않았다.
   처음 생각에서 벗어나는 것이 어렵다. 이러한 과정을 어떻게 극복해야할지 고민이다.
   아마 문제에 대한 여러가지 접근 방법을 알고 있어야 하는 것 같다. 특히 그리디 문제는 그런 상황을 많이 경험하고 있는중.
2) 나의 풀이의 예외, 반례들을 찾아내는 것은 정말 정말 힘든 과정이라는 것을 다시금 느낀다.
*/
