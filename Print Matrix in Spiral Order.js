// Problem Description
// Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)

// Input format
// One line of input, containing a single integer A.

// Output format
// Print a 2-d matrix of size A x A satisfying the spiral order.

// Sample Input 1
// 3

// Sample Output 1
// 1 2 3

// 8 9 4

// 7 6 5

// Explanation
// As you can see the matrix goes spirally with each next position incremented by one.

// Constraints
// 1<=A<=1000

function spiralMatrixII(n) {
    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);
    }
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    let counter = 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = counter++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = counter++;
        }
        right--;
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = counter++;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = counter++;
        }
        left++;
    }
    return matrix;

}