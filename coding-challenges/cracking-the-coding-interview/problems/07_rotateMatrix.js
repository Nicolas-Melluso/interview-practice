"use strict";
// 7. *Rotate Matrix*:
Object.defineProperty(exports, "__esModule", { value: true });
function rotateMatrix(matrix) {
    var n = matrix.length;
    for (var layer = 0; layer < Math.floor(n / 2); layer++) {
        var first = layer;
        var last = n - 1 - layer;
        for (var i = first; i < last; i++) {
            var offset = i - first;
            var top_1 = matrix[first][i];
            matrix[first][i] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last - offset];
            matrix[last][last - offset] = matrix[i][last];
            matrix[i][last] = top_1;
        }
    }
}
exports.default = rotateMatrix;
