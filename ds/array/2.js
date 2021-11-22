/*
특이조건 : Do not return anything, modify nums in-place instead.

위 조건이 없으면 자바스크립트의 Array API를 사용하면 손쉽게 만들수 있다.

✅ solution3 idea
기본적으로 처음에 드는 생각은 0을 뒤로 옮겨야겠어 였다.
(Array API 없이 생각한다면) 뒤로 옮길 때 기존 숫자의 순서가 보장되어야하기 때문에 버블 정렬과 같은 방식으로 스왑이 이루어져야한다.
이는 매우 많은 연산이 들어갈 수 있다.

하지만 반대로 0이 아닌 숫자를 앞으로 옮긴다 라고 하면, 숫자의 순서는 전혀 문제가 되지않게된다.
단, 어떻게 0과 0이 아닌 숫자를 구분한 값을 가지고 있느냐에 대한 구현을 잘 해결해야한다.

*/
function solution1(nums) {
  let index = 0;
  let count = 0;
  while (count < nums.length) {
    if (nums[index] !== 0) index++;
    else {
      nums.splice(index, 1);
      nums.push(0);
    }
    count++;
  }
}

console.log(solution1([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(solution1([0])); // [0]

// [참고] Array API를 사용한 풀이
function solution2(nums) {
  const noZero = nums.filter(Boolean);
  const zero = Array.from({ length: nums.length - noZero.length }, (x) => 0);

  return noZero.concat(zero);
}

console.log(solution2([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(solution2([0])); // [0]

// new idea
function solution3(nums) {
  let zeroIndex = 0,
    index = 0;

  while (index < nums.length) {
    if (nums[index] !== 0) {
      const tmp = nums[zeroIndex];
      nums[zeroIndex] = nums[index];
      nums[index] = tmp;
      zeroIndex = zeroIndex + 1;
    }
    index++;
  }
}

console.log(solution3([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(solution3([5, 0, 1, 0, 3, 0, 12])); // [5,1,3,12,0,0,0]
console.log(solution3([1, 3, 0, 0, 0, 4, 0, 5])); // [1,3,4,5,0,0,0,0]
console.log(solution3([0])); // [0]

/*
solution3의 self feedback

1. zeroIndex의 초기값 때문에 코드가 뭔가 복잡하다. 이를 보완할 수 있는 방법이 없을까?
  → falsy value를 이용하려고 했지만, 인덱스 0 역시 falsy value이기 때문에 이를 구분할 수 없다.

  → ✅ [resolve] 이 부분은 내가 스왑 로직을 잘못짜서 이런 상황이 나타난 것 같다.

    항상 스왑을 할 때 tmp라는 임시변수에 없어질 값을 넣어준다. 그런데 여기서는 나중에 넣어줄 값이 명백하게 0이기 때문에
    임시변수를 사용하지 않고 0을 하드코딩하여 넣어줬더니 이런 불상사가 발생하였다. 😰

    nums[zeroIndex] = nums[index];
    nums[index] = 0; 👎
    zeroIndex = zeroIndex + 1;

2. 꼭 while을 써야하는가??
  → 생각해보면 굳이 while을 사용할 필요가 없었다. 인덱스를 2개를 잡아야하기때문에 solution1에서 자연스럽게 while을 사용하여서
    여기서도 그렇게 접근하였지만, 그럴필요가 없었다. 왜냐하면 숫자를 가르키는 인덱스(index)는 일반적인 for문에서의 i와 같이 순차적으로
    진행되기 때문이다.
*/

function solution4(nums) {
  let zeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[zeroIndex] = nums[i];
      zeroIndex++;
    }
  }

  for (let i = zeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}

console.log(solution4([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(solution4([5, 0, 1, 0, 3, 0, 12])); // [5,1,3,12,0,0,0]
console.log(solution4([1, 3, 0, 0, 0, 4, 0, 5])); // [1,3,4,5,0,0,0,0]
console.log(solution4([0])); // [0]

/*
방법 1. 스왑을 통해서 구현할 수 있다. → solution3 방법
방법 2. 스왑을 안하고 숫자를 모두 옮긴 후 0을 마지막에 overwriting할 수 있다.  → solution4 방법 ✅
*/
