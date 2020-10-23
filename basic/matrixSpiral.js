(function(){
    function spiral(number){
        const result = [];
        let startCol = 0;
        let endCol = number;
        let startRow = 0;
        let endRow = number;
        let value = 1;

        for(let i = 0; i < number; i++){
            result.push([]);
        }

        while(startCol <= endCol && startRow <= endRow){
            for(let i = startCol; i < endCol; i++){
                result[startRow][i] = value;
                value++;
            }
            endCol--;
            startRow++;

            for(let i = startRow; i < endRow; i++){
                result[i][endCol] = value;
                value++;
            }
            endCol--;
            endRow--;

            for(let i = endCol; i >= startCol; i--){
                result[endRow][i] = value;
                value++;
            }
            endRow--;

            for(let i = endRow; i >= startRow; i--){
                result[i][startCol] = value;
                value++;
            }
            startCol++;




        }

            return result;
    }



    console.log(spiral(3));
    /*
    [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]
    ]
    */
    console.log(spiral(5));
    /*
    [
        [ 1,  2,  3,  4, 5],
        [16, 17, 18, 19, 6],
        [15, 24, 25, 20, 7],
        [14, 23, 22, 21, 8],
        [13, 12, 11, 10, 9]
    ]

    */
})();