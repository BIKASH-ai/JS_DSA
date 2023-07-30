// Problem Description
// You are given an n x n 2D matrix representing an image.
// Rotate the image by 90 degrees (clockwise).

// Note:
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// Input format
// There are N+1 lines of input.
// First line contains one integer N.
// Next N line contains N space separated integers

// Output format
// Print the NxN rotated matrix.

// Sample Input 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// Sample Output 1
// 7 4 1
// 8 5 2
// 9 6 3
function rotateImage(n, matrix) {
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse each row of the transposed matrix
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    // Return the rotated matrix
    return matrix;
}