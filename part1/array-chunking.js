//문제
//배열과 사이즈를 입력받고 사이즈에 맞게 배열을 나누고 그 배열들을 리턴하시오

//나눌 수 있는 사이즈 만큼만 나누시오
//나눌 수 없다면 원배열을 리턴하시오

//입출력예시
// ([1, 2, 3, 4], 2) => [[1, 2], [3, 4]]
// ([1, 2, 3, 4], 3) => [[1, 2, 3], [4]]
// ([1, 2, 3, 4], 5) => [[1, 2, 3, 4]]

function chunkArray(array, size) {
	const result = [];

	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}

	return result;
}

console.log(chunkArray([1, 2, 3, 4], 2));
console.log(chunkArray([1, 2, 3, 4], 3));
console.log(chunkArray([1, 2, 3, 4], 5));
console.log(chunkArray([], 5));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
