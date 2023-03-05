//문제
//For a given number, find all the prime numbers from zero to that number.

(function () {
    function getPrime(number) {
        const array = Array.from({ length: number + 1 }, (v, i) => i);
        array[1] = 0;
        for (let i = 2; i < array.length; i++) {
            for (let j = i + i; j < array.length; j = j + i) {
                if (array[j] === 0) continue;
                else array[j] = 0;
            }
        }
        return array.filter((v) => v);
    }

    console.log(getPrime(10));
    // [2, 3, 5, 7]
    console.log(getPrime(1000), getPrime(1000).length);
})();
