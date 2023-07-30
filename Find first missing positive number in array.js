// Problem Description
// Given an unsorted array of integers, find the smallest missing positive integer. The space complexity need not be O(1), you can also implement a O(N) space complexity solution.

// Input format
// There are 2 lines of input.
// First line contains 1 integer N - Number of elements in the array.
// Second line contains space separated N integers.

// Output format
// Print the smallest missing positive integer.

// Sample Input 1
// 4
// 3 4 -1 1

// Sample Output 1
// 2

// Explanation 1
// 2 is the smallest positive integer which is missing as 1 is already present in the array. Note that 0 will not be considered as positive.

// Constraints
// N <= 200000
// -2 ^ 31 <= Range of values <= 2 ^ 31 - 1
function firstMissingPositive(n, arr) {
    // Use an object as a hash set to keep track of which positive integers are present in the array
    const presentIntegers = {};

    // Iterate over the array to mark all positive integers as present
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            presentIntegers[arr[i]] = true;
        }
    }

    // Iterate over positive integers starting from 1 and return the first one that's missing
    for (let i = 1; ; i++) {
        if (!presentIntegers[i]) {
            return i;
        }
    }
}