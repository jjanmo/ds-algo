/*
문제에 대한 자세한 설명
0 < n <= 100
n이 주어지면  1~n까지의 주어진 수만큼의 #를 만드시오

ex) n = 6

     #
    ##
   ###
  ####
 #####
######


<본래문제>
#
##
###
####
#####
######
*/

(function () {
    //이중for문
    function steps(number) {
        let result = '';
        for (let i = number; i >= 1; i--) {
            for (let j = 1; j <= number; j++) {
                if (i - j <= 0) result += '#';
                else result += ' ';
            }
            result += '\n';
        }

        return result;
    }

    // console.log(steps(6));
    // console.log(steps(10));

    //재귀1
    //=> 뭔가 재귀스럽지않음...
    function _steps(number, row = 1, stair = '', stairs = '') {
        if (number + 1 === row) return stairs;
        else if (number >= row) {
            stair = ' '.repeat(number - row) + '#'.repeat(row) + '\n';
            stairs += stair;
            return _steps(number, ++row, (stair = ''), stairs);
        }
    }

    console.log(_steps(6));
    console.log(_steps(10));

    //재귀2
    //본래문제
    function __steps(number, row = 0, stair = '', stairs = '') {
        if (number === row) return stairs;
        if (stair.length === number) return __steps(number, ++row, '', (stairs += stair + '\n'));

        return __steps(number, row, stair.length <= row ? (stair += '#') : (stair += ' '), stairs);
    }

    console.log(__steps(6));
    console.log(__steps(10));
})();
