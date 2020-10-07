//문제
//피보나치 수열을 메모이제이션 방법을 사용하여 구현하시오

(function () {
    //메모 재귀
    console.time('memoFib');
    const memo = [0, 1];

    function memoFibonacci(number) {
        if (typeof memo[number] !== 'number') {
            const result = memoFibonacci(number - 1) + memoFibonacci(number - 2);
            memo[number] = result;
        }

        return memo[number];
    }

    console.log(memoFibonacci(100));
    console.timeEnd('memoFib');
})();
