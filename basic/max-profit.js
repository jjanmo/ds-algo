/*
문제
Given an array of stock prices, find the minimum buy price and the maximum sell price that produce the greatest profit.


주식 가격의 리스트(array)가 있다고 하자. 가장 크게 얻을 수 있는 시세 차익의 최소값과 최대값을 구하시오.
단, 1번만 사고 팔 수 있고, 사기 전에는 팔 수 없다. 그리고 한 번에 동시에 사고 팔 수 없다.
*/

(function () {
	//solution 1
	//주식을 사는 것을 기준으로 해결 : for-i 기준
	function maxProfit(array) {
		let profit = 0;
		let result = [];
		for (let i = 0; i < array.length; i++) {
			for (let j = i + 1; j < array.length; j++) {
				if (array[j] - array[i] > profit) {
					profit = array[j] - array[i];
					result = [array[i], array[j]];
				}
			}
		}

		return result;
	}

	console.log(maxProfit([1, 2, 3, 4, 5]));
	//[1, 5]
	console.log(maxProfit([2, 1, 5, 3, 4]));
	//[1, 5]
	console.log(maxProfit([2, 10, 1, 3]));
	//[2, 10]
	console.log(maxProfit([2, 1, 2, 11]));
	//[1, 11]

	//solution 2
	//주식을 파는 것을 기준으로 해결 : for-i가 최대값
	function _maxProfit(array) {
		let min = array[0];
		let max;
		let profit = 0;
		for (let i = 0; i < array.length; i++) {
			if (min > array[i]) min = array[i];
			if (array[i] - min > profit) {
				profit = array[i] - min;
				max = array[i];
			}
		}

		return [min, max];
	}

	console.log(_maxProfit([1, 2, 3, 4, 5]));
	//[1, 5]
	console.log(_maxProfit([2, 1, 5, 3, 4]));
	//[1, 5]
	console.log(_maxProfit([2, 10, 1, 3]));
	//[2, 10]
	console.log(_maxProfit([2, 1, 2, 11]));
	//[1, 11]
})();
