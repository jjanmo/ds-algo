//문제
//Given an array of numbers, calculate the mean, median, and mode.
//평균값 => 총합 / 전체개수
//중앙값 => 중앙에 있는 값
//최빈값 => 가장 많이 나온 수

(function () {
	const array1 = [1, 2, 3, 4, 4, 5, 5];
	const array2 = [1, 1, 2, 2, 3, 3, 4, 4];

	function State(array) {
		this.array = array;
	}

	State.prototype.getMean = function () {
		const sum = this.array.reduce((ac, val) => ac + val, 0);
		return Number((sum / this.array.length).toFixed(2));
	};

	State.prototype.getMedian = function () {
		const sortedArray = this.array.slice().sort((a, b) => a - b);
		if (sortedArray.length % 2 === 0) {
			const _index = sortedArray.length / 2;
			return Number(((this.array[_index] + this.array[_index - 1]) / 2).toFixed(2));
		} else {
			return this.array[Math.floor(sortedArray.length / 2)];
		}
	};

	State.prototype.getMode = function () {
		const obj = {};
		const result = [];
		let maxCount = 0;

		this.array.forEach((ele) => {
			if (!obj[ele]) {
				obj[ele] = 1;
			} else {
				obj[ele]++;
			}
		});

		for (let prop in obj) {
			if (maxCount < obj[prop]) {
				maxCount = obj[prop];
			}
		}

		for (let prop in obj) {
			if (obj[prop] === maxCount) result.push(Number(prop));
		}

		return result.length === Object.keys(obj).length ? [] : result;
	};

	const state1 = new State(array1);
	console.log(state1.getMean()); //3.43
	console.log(state1.getMedian()); //4
	console.log(state1.getMode()); //[ 4, 5 ]

	const state2 = new State(array2);
	console.log(state2.getMean()); //2.5
	console.log(state2.getMedian()); //2.5
	console.log(state2.getMode()); //[]
})();
