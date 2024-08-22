// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][]

export default function rotateMatrix (matrix: Matrix) {

    const n = matrix.length;

    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        const first = layer;
        const last = n - 1 - layer;

        for (let i = first; i < last; i++) {
            const offset = i - first;
            
            const top = matrix[first][i];
            
            matrix[first][i] = matrix[last - offset][first];
            
            matrix[last - offset][first] = matrix[last][last - offset];
            
            matrix[last][last - offset] = matrix[i][last];
            
            matrix[i][last] = top;
        }
    }
}