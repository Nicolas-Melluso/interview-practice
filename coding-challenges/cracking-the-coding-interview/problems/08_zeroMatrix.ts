// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix (matrix: Matrix) {
const zeroPosition = [];
for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix.length; column++) {
        if (matrix[row][column] == 0) {
            zeroPosition.push([row, column])
        }
        
    }
}


for (let i = 0; i < zeroPosition.length; i++) {
    let zeroPos = zeroPosition[i];

    matrix[zeroPos[0]] = matrix[zeroPos[0]].fill(0);

    for (let j = 0; j < matrix.length; j++) {
        matrix[j][zeroPos[1]] = matrix[j][zeroPos[1]] = 0;
    }
}
    return matrix;
}
