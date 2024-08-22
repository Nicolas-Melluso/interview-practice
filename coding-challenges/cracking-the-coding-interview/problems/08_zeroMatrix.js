"use strict";
// 8. *Zero Matrix*:
Object.defineProperty(exports, "__esModule", { value: true });
function zeroMatrix(matrix) {
    var zeroPosition = [];
    for (var row = 0; row < matrix.length; row++) {
        for (var column = 0; column < matrix.length; column++) {
            if (matrix[row][column] == 0) {
                zeroPosition.push([row, column]);
            }
        }
    }
    for (var i = 0; i < zeroPosition.length; i++) {
        var zeroPos = zeroPosition[i];
        matrix[zeroPos[0]] = matrix[zeroPos[0]].fill(0);
        for (var j = 0; j < matrix.length; j++) {
            matrix[j][zeroPos[1]] = matrix[j][zeroPos[1]] = 0;
        }
    }
    return matrix;
}
exports.default = zeroMatrix;
