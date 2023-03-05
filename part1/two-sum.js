//문제
//Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
//배열과 합의 결과가 주어진다. 주어진 결과를 만들 수 있는 한 쌍의 숫자를 배열 안에서 골라서 리턴하시오
//결과가 1개이상인 경우 모두 리턴하시오

(function () {
	const array = [1, 2, 2, 3, 4];
	const sum = 4;

	//solution 1 : 일반적인 방법 이중for문
	console.time('solution1 start');
	function getTwoSum(array, sum) {
		const result = [];
		for (let i = 0; i < array.length; i++) {
			for (let j = i + 1; j < array.length; j++) {
				if (array[i] + array[j] === sum) {
					result.push([array[i], array[j]]);
				}
			}
		}

		return result;
	}

	console.log(getTwoSum(array, sum));
	// [[2, 2], [3, 1]]
	console.timeEnd('solution1 start');

	//solution 2 : use trick about "couterpart"
	console.time('solution2 start');
	function _getTwoSum(array, sum) {
		const result = [];
		for (let i = 0; i < array.length; i++) {
			const couterpart = sum - array[i];
			if (array.slice(i + 1).indexOf(couterpart) !== -1) {
				result.push([array[i], couterpart]);
			}
		}

		return result;
	}

	console.log(_getTwoSum(array, sum));
	// [[2, 2], [3, 1]]
	console.timeEnd('solution2 start');
})();
