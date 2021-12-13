function solution1(array) {
  const sortedArray = [...array].sort((a, b) => a - b);
  let hIndex, pIndex; // hIndex 현수가 받은 번호, pIndex 짝꿍이 받은 번호
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sortedArray[i]) {
      if (!hIndex) {
        hIndex = i + 1;
      } else {
        pIndex = i + 1;
      }
    }
  }

  return [hIndex, pIndex];
}

console.log(solution1([120, 125, 152, 130, 135, 135, 143, 127, 160])); // 3 8
console.log(solution1([120, 130, 150, 150, 130, 150])); // 3 5
console.log(solution1([122, 123, 125, 125, 128, 161, 167, 167, 167, 161, 170])); // 7 10

function solution2(array) {
  let hIndex, pIndex; // hIndex 현수가 받은 번호, pIndex 짝꿍이 받은 번호
  for (let i = 0; i < array.length - 1; i++) {
    if (!hIndex && array[i] >= array[i + 1]) hIndex = i;
    else if (hIndex && array[i] >= array[i + 1]) pIndex = i + 1;
  }

  return [hIndex + 1, pIndex + 1];
}

console.log(solution2([120, 125, 152, 130, 135, 135, 143, 127, 160])); // 3 8
console.log(solution2([120, 130, 150, 150, 130, 150])); // 3 5
console.log(solution2([122, 123, 125, 125, 128, 161, 167, 167, 167, 161, 170])); // 7 10  ✅ 반례

/*
self feedback

처음엔 아주 쉽게(?) 정렬을 다시 세운 후 비교를 통해서 문제를 해결하였다.
혹시 다른 문제 해결방법이 없을까 고민하다가,
단순하게 오름차순에서 벗어나는 부분만을 찾으면 그 부분이 서로 번호를 바꾼 부분이 될 수 있을 것이라고 생각하였다.
하지만, 키가 오름 차순이지만 서로 키가 같은 경우도 오름 차순의 일부로서 진행이 되었다.
여기서 서로 키가 같은 경우가 오름 차순일때 같은 것인지, 서로 번호를 바꿨는데 앞뒤가 같은 것인지를 구분할 수 없는 반례가 있었다.
결국 이런 식의 접근으로 잘못된 해결 방식이라는 결론을 내렸다.
*/
