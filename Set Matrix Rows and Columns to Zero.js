// Problem Description
// Given an m x n matrix, if an element is 0, set its entire row and column to 0.
// Do it in-place, that is, modify the same matrix. Do not create a new one.

// Input format
// First line contains 2 integers m,n - number of rows and columns respectively.
// Next m lines contain space separated n integers.

// Output format
// Output the same matrix.

// Sample Input 1
// 3 3
// 1 1 1
// 1 0 1
// 1 1 1

// Sample Output 1
// 1 0 1
// 0 0 0
// 1 0 1

// Explanation 1
// There is one ‘0’ in the 2nd row and 2nd column, so all the elements in that row and column become 0.

// Sample Input 2
// 3 4
// 0 1 2 0
// 3 4 5 2
// 1 3 1 5

// Sample Output 2
// 0 0 0 0
// 0 4 5 0
// 0 3 1 0

// Explanation 2
// The 1st row, 1st column and 4th column all contain ‘0’, so all the values in these rows & columns become 0.

// Constraints
// M,N <= 500
function setMatrixZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;

    // check if first row has a zero
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    // check if first column has a zero
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // check for zeros in the rest of the matrix and update the first row and column accordingly
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // update the rest of the matrix based on the values in the first row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // update first row if needed
    if (firstRowHasZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // update first column if needed
    if (firstColHasZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}