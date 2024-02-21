function diagonalDifference(arr) {
    let leftDiagonal = 0 ;
    let rightDiagonal = 0 ;
    let matrix = arr.length
    for (let i =  0 ; i < matrix ; i++){
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[matrix-1-i][i];
    }
    let result = Math.abs(leftDiagonal-rightDiagonal)
    return result;

}
let mat = [[1,2,3],[3,2,5],[9,8,7]]
console.log(diagonalDifference(mat))