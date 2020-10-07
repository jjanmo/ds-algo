/*
문제
Implement a function that returns the fibonacci number at a given index.
*/

(function () {
    function fibonacci(number) {
        if (number === 0) return 0;
        else if (number === 1) return 1;
        else return fibonacci(number - 1) + fibonacci(number - 2);
    }

    console.log(fibonacci(1));
    //1
    console.log(fibonacci(2));
    //1
    console.log(fibonacci(3));
    //2
    console.log(fibonacci(6));
    //8
    console.log(fibonacci(10));
    //55
})();
