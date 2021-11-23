function solution1(num) {
  const strNum = String(num);
  let max = num;
  for (let i = 0; i < strNum.length; i++) {
    let changed = '';
    for (let j = 0; j < strNum.length; j++) {
      if (j === i && strNum[j] === '6') {
        changed += '9';
      } else changed += strNum[j];
    }

    if (max < Number(changed)) max = changed;
  }

  return max;
}

console.log(solution1(9669)); // 9969
console.log(solution1(9996)); // 9999
console.log(solution1(9999)); // 9999

/*
self feedback

해당 문제는 생각하기 쉬운 문제이다.
그런데 왜 여기에 담았는가?!

바로 생각의 흐름때문에 담아봤다.
위의 코드는 진짜 생각의 흐름을 그대로 구현하였다.

숫자를 1개를 바꾸는데, 6을 9 혹은 9를 6으로 바꿔서 최대의 수를 만들어라 라는 문제.
그렇기 때문에 최대의 수가 되려면 당연히 6을 9로 바꿔야할 것이다.
그러면 어떤 수가 6인 경우 9로 바꾸어서 이것이 최대 수인지 비교를 하면 된다.
이 생각을 위 코드롤 표현하였다.

하나의 숫자를 선택해서 바꾸는 부분에서의 최적의 해를 토대로 전체 최적의 해를 구한다. 라고 생각할 수 있다.
그런데 이렇게 할 필요가 없었다.
왜냐하면 굳이 다 비교할 필요가 없다는 말...
가장 처음 만나는 6을 9로 바꾸면 그 수가 어떤 수를 바꾸는 것보다 가장 큰 수이다.
즉 다 비교하지 말고 위의 말을 구현하면 된 것이다.

그리디 알고리즘이라고 하여 모든 비교의 과정을 다 구현할 필요가 없다.
그 알고리즘의 과정에서 전체 최적의 해를 구하는 방법이 있다면 그 부분만 구현하면 그것이 전체 솔루션이 될 수 있다.

그래서 아래와 같은 풀이로 문제를 해결할 수 있다는 것!!! Awesome 🔥
*/

function solution2(num) {
  return Number(num.toString().replace(/6/, '9'));
}

console.log(solution2(9669)); // 9969
console.log(solution2(9996)); // 9999
console.log(solution2(9999)); // 9999
