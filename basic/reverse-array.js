//문제
//배열 뒤집기

//sol1)
function reverseArray(array) {
	return array.reverse();
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([]));

//sol2)
function _reverseArray(array) {
	const newArray = [];
	array.forEach((ele) => {
		newArray.unshift(ele);
	});

	return newArray;
}

console.log(_reverseArray([1, 2, 3, 4]));
console.log(_reverseArray([1, 2, 3, 4, 5]));
console.log(_reverseArray([]));

//sol3) no new variable, swap array element
function __reverseArray(array) {
	for (let i = 0; i < array.length / 2; i++) {
		const tmp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = tmp;
	}

	return array;
}

console.log(_reverseArray([1, 2, 3, 4]));
console.log(_reverseArray([1, 2, 3, 4, 5]));
console.log(_reverseArray([]));
