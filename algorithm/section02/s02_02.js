function solution(n, array) {
    let count = 1;
    let tall = array[0];
    for (let i = 1; i < n; i++) {
        if (tall < array[i]) {
            count++;
            tall = array[i];
        }
    }

    console.log(count);
}

solution(8, [130, 135, 148, 140, 145, 150, 150, 153])