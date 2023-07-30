// Problem Description
// Given a number represented as an array of digits, increment the number by 1, and return the resulting sum as an array.

// Input format
// There are two lines of input.

// First line will contain a single integer N .

// Next line will contain N space separated integers for Array A.

// Output format
// Single integer which will be the incremented number.

// Sample Input 1
// 3

// 1 1 1

// Sample Output 1
// 112

// Explanation
// 111 + 1 = 112

// Constraints
// 0<=Ai<10

// Most significant value will be non-zero in the array.

// 1<=N<=5000

function incrementNumber(N, A) {
    let arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(parseInt(A[i]));
    }
    let carry = 1;
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        let sum = arr[i] + carry;
        if (sum >= 10) {
            carry = 1;
            arr[i] = sum % 10;
        } else {
            carry = 0;
            arr[i] = sum;
        }
    }
    if (carry > 0) {
        arr.unshift(carry);
    }
    return arr.join("");
}