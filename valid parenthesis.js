// Problem Description
// Given a string S containing the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// For an input string to be valid:

// Open brackets must be closed by the same type of brackets.( can be closed by ) only

// Open brackets must be closed in the correct order. ([]) is valid, ([)] is not.

// Note: An empty string is also considered valid.

// Input format
// One line containing a string with a bracket sequence.

// Output format
// Return "true" if balanced, false otherwise.

// Constraints
// 0 <= | S | <= 10^5

// Sample Input 1
// ()[]{}

// Sample Output 1
// true

function validParenthesis(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (
                (char === ')' && top !== '(') ||
                (char === '}' && top !== '{') ||
                (char === ']' && top !== '[')
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
}