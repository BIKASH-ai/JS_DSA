// Problem Description
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Input format
// First line contains a string.

// Output format
// Return boolean value.

// Sample Input 1
// A man, a plan, a canal: Panama

// Sample Output 1
// true

// Explanation
// "amanaplanacanalpanama" is a palindrome.

function isPalindrome(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

