/*
문제
> 20번 문제와 유사 
> 피라미드를 만드시오

0 < n <= 100
n이 주어지면  1~n까지의 주어진 수만큼의 #를 만드시오

n = 3
  #
 ###
#####

n = 5
    #
   ###
  #####
 #######
#########
*/

(function () {
    function pyramid(number) {
        let result = '';
        for (let i = 1; i <= number; i++) {
            for (let j = i; j < number; j++) {
                result += ' ';
            }
            result += '#'.repeat(2 * i - 1) + '\n';
        }

        return result;
    }

    console.log(pyramid(3));
    console.log(pyramid(7));
})();
