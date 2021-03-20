function solution(number, array) {
    let result = '';
    for (let i = 0; i < number; i++) {
        if (i === 0) result += (array[i] + ' ');
        else {
            if (array[i] > array[i - 1]) result += (array[i] + ' ');
        }
    }
    console.log(result);
}

solution(6, [7, 3, 9, 5, 6, 12]);
