// Problem Description
// Given an matrix of dimension n*n. Find the sum of elements present at principal diagonal of the matrix.

// Input format
// First line contains integer n.

// In next n lines each line contains n elements.

// Output format
// An integer representing the sum of diagonal elements.

// Sample Input 
// 4

// 1 2 3 4

// 1 2 4 5

// 2 3 3 4

// 1 1 2 3

// Sample Output 
// 9

function diagonalSum(n, matrix) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += matrix[i][i];
    }

    return sum;
}
