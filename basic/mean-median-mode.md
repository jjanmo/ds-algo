# Mean Median Mode

> 주어진 배열의 mean과 median, mode를 구하시오. 풀이를 하기 전에 3가지의 용어에 대해서 정확히 알아야 문제를 풀 수 있다. 3가지 용어 모두 통계에서 자주 나오는 용어이다.

`mean`:

평균, 가장 일반적으로 볼 수 있는 값이다.

`median`:

중앙값이라고 한다. 주어진 값들을 크기 순으로 정렬했을 때, 가장 중앙에 위치하는 값이다.

`mode`:

최빈값이라고 한다. 주어진 값 중에서 가장 많이 관측되는 수를 말한다. 즉, 주어진 값들 중에서 가장 많이 나오는 값을 말한다. 하나 이상의 값이 관측된다면, 관측된 모든 수가 최빈값이 된다. 하지만 <u>만약에 모든 수가 같은 횟수로 관측된다면, 이 때의 `최빈값은 존재하지 않는다` 라고 말한다.</u>

<br />

# WIL(What I Learned this problem)

> 각각의 값을 구하는 방법

`mean`:

가장 일반적인 방법으로 `전체 합 / 전체 개수`이다.
for문으로 총합을 구하여 나워줄 수도 있다. 하지만 좀 더 멋지게(😅??) 푸는 것은 `reduce()`를 활용하는 것이다.

`medain`:

- 정렬을 한다.
- 인덱스의 가운데 값을 골라낸다. 이 때 주어진 배열이 짝수 개인지 홀수 개인지에 따라서 분기한다.

`mode`:

> 이 부분이 접근하는데 있어서 여러가지 생각을 하게 만들었다. 몇 단계에 걸쳐서 문제를 접근했다.

- 1️⃣ 기본적으로 배열의 각 요소의 횟수를 세기 위해서 객체를 생성한다.(`해쉬테이블`을 만든다고 한다.) 객체의 프로퍼티는 각 요소를 키, 요소의 횟수를 값으로 한다.
- 2️⃣ 객체 안에서 가장 큰 수를 구한다.(가장 많이 나오는 횟수를 말한다)
- 3️⃣ 위에서 구한 가장 큰 수에 해당하는 요소가 무엇인지 구한다.(최빈값)
- 4️⃣ 배열의 전체 요소에 해당 요소가 모두 포함되는지 살핀다.

위 단계 중에서 하나로 합칠 수 있는 단계들이 있을까에 대해서 고민하였다.(한 번이라도 for문을 안돌고 싶었기때문에...) 나는 찾지 못하였다. (개인적인 생각으로) 왜냐하면 각각의 단계를 완료해야만 다음 단계에서 필요한 값들을 구할 수 있기 때문이다.

> 여러 풀이를 보다보니 2단계와 3단계를 합칠 수 있는 것 같다. 하지만 코드를 확인해보면 뭔가 가독성이 좀 떨어지는 것 같다. 내가 저런 과정에 익숙하지 않아서 그런 것 같다...😂

```javascript
//여기서 obj는 각 배열의 요소의 빈도수를 담은 객체이다

let result = [];
let maxCount = 0;

for (let props in obj) {
	if (maxCount < obj[props]) {
		result = [props]; //빈도수가 큰 수가 나오면 배열에 재할당(처음부터 다시 시작)
		maxCount = obj[props];
	} else if (maxCount === obj[props]) {
		result.push(props);
	}
}
```

> 아래는 나의 코드이다. 비교 ㄱㄱ💥

```javascript
const result = [];
let maxCount = 0;

//가장 큰 빈도 수를 구한다.
for (let prop in obj) {
	if (maxCount < obj[prop]) {
		maxCount = obj[prop];
	}
}

//큰 빈도수에 해당하는 요소를 구한다.
for (let prop in obj) {
	if (obj[prop] === maxCount) result.push(Number(prop));
}
```

> 보다보니 합친 코드가 더 괜찮네...😈

> 역시 생각의 다양성이 중요하다. 사람인지라 자신이 자주 생각하는 패턴으로 생각이 고정되는 것은 어쩔 수 없는 것 같다. 그럴수록 다양한 코드와 다양한 의견을 수렴하고 그것을 이해하고 내것으로 만드는 과정이 필요한 것 같다.
