function solution1(result) {
  const vote = {};
  const resultArray = result.split('');
  for (let element of resultArray) {
    if (!vote[element]) {
      vote[element] = 0;
    }
    vote[element]++;
  }

  let max = Number.MIN_SAFE_INTEGER;
  let representative = '';
  for (let property in vote) {
    if (vote[property] > max) {
      max = vote[property];
      representative = property;
    }
  }

  return representative;
}

console.log(solution1('BACBACCACCBDEDE')); // C

/*
나는 자바스크립트의 객체가 Hash Map과 유사하기 때문에 이를 사용해야만 하는 경우에는 객체를 만들어서 사용해왔다.
그런데 이번에 Map객체를 사용하면서 object와 map 사이에 무엇을 사용해야할지에 대해서 찾아보았다.
링크 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Keyed_collections#object%EC%99%80_map_%EB%B9%84%EA%B5%90

사실 Object와 Map이 큰 차이는 없지만, 그래도 map이 좀 더 좋은 map이 되도록하는 몇가지가 있는 것 같다.

- Map의 키는 모든 값을 가질 수 있다.(Object의 키값은 string)
- Object는 크기를 수동으로 추적해야하지만, Map은 크기를 쉽게 얻을 수 있다. : map.size
- Map은 삽입된 순서대로 반복된다.(Object의 경우, 순차대로 반복되는 것처럼 보이지만 항상 이를 보장하지않는다.)


https://ko.javascript.info/map-set#ref-176
*/

// map을 이용한 방법
function solution2(string) {
  const vote = new Map();
  let max = 0;
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (vote.has(string[i])) {
      const count = vote.get(string[i]);
      vote.set(string[i], count + 1);
    } else {
      vote.set(string[i], 1);
    }
  }

  for (const [key, value] of vote) {
    if (max < value) {
      max = value;
      result = key;
    }
  }

  return result;
}

console.log(solution2('BACBACCACCBDEDE')); // C
