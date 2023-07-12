// function reverse(x) {
//   const sign = x > 0 ? 1 : -1;
//   x = sign === -1 ? x * sign : x;

//   return Number(String(x).split('').reverse().join('')) * sign;
// }

// // console.log(reverse(123));
// // console.log(reverse(-123));
// // console.log(reverse(120));

// function swap(a, b) {
//   [a, b] = [b, a];
//   console.log('in function', a, b);
// }

// function swap1(arr) {
//   // const [a, b] = arr;
//   // arr = [b, a];
//   const tmp = arr[0];
//   arr[0] = arr[1];
//   arr[1] = tmp;
//   console.log('in function', arr);
// }

// // call by value
// let x = 10,
//   y = 20;
// console.log(x, y);
// swap(10, 20);
// console.log(x, y);

// console.log('------');
// // call by reference
// const a = [10, 20];
// console.log(a);
// swap1(a);
// console.log(a);

var twoSum = function (nums, target) {
  let answer = [];
  const result = [];
  const dfs = (total, start) => {
    if (result.length === 2) {
      if (target === total) answer = [...result];
    }

    for (let i = start; i < nums.length; i++) {
      result.push(i);
      dfs(total + nums[i], i + 1);
      result.pop();
    }
  };

  dfs(0, 0);

  return answer;
};

console.log(twoSum([2, 7, 11, 15], 9));

[
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
];
