function solution1(array) {
  const newArray = [];

  array.forEach((string) => {
    if (!newArray.includes(string)) newArray.push(string);
  });

  return newArray;
}

//앞의 문제처럼 indexOf()를 사용할 수 있다.
//indexOf()는 문자열과 배열에서 모두 사용할 수 있다. 위의 코드에서 사용한 includes() 역시 둘 다 사용할 수 있다.

function solution2(array) {
  return array.filter((ele, i) => array.indexOf(ele, i + 1) === -1);
  // return array.filter((ele, i) => array.indexOf(ele) === i);
}

console.log(solution1(['good', 'time', 'good', 'time', 'student']));
console.log(solution2(['good', 'time', 'good', 'time', 'student']));
