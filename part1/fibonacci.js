/*
문제
Implement a function that returns the fibonacci number at a given index.
*/

(function () {
    //재귀를 이용한 해결
    console.time('fibonacci1 time');
    function fibonacci(number) {
        console.log(count);
        if (number === 0) return 0;
        else if (number === 1) return 1;
        else return fibonacci(number - 1) + fibonacci(number - 2);
    }
    console.log(fibonacci(10));
    console.timeEnd('fibonacci1 time');

    // console.log(fibonacci(1));
    //1
    // console.log(fibonacci(2));
    //1
    // console.log(fibonacci(3));
    //2
    // console.log(fibonacci(6));
    //8
    // console.log(fibonacci(10));
    //55

    //반복문을 이용한 해결
    console.time('fibonacci2 time');
    function _fibonacci(number) {
        const array = [];
        for (let i = 0; i <= number; i++) {
            if (i === 0) array[i] = 0;
            else if (i === 1) array[i] = 1;
            else {
                array[i] = array[i - 1] + array[i - 2];
            }
        }

        return array[number];
    }

    console.log(_fibonacci(100));
    console.timeEnd('fibonacci2 time');
})();
