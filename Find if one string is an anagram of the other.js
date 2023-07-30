// Problem Description
// Given two strings s and t, write a function to determine if t is an anagram of s.

// Note: You may assume the string contains only lowercase alphabets.

// Note:-
// There's a test case where both the strings are empty but the js compiler is treating one as empty and other as undefined. So, update the readline function accordingly.

// Input format
// You will be given two strings in two separate lines.

// Output format
// Print "true" if both the strings are anagram otherwise “false”.

// Constraints
// Length of string <= 100000

// Sample Input 1
// anagram
// nagaram

// Sample Output 1
// true

// Sample Input 2
// rat
// car

// Sample Output 2
// false
function validAnagram(s, t) {
    if ((!s && !t) || (s === undefined && t === undefined)) {
      return true;
    }
  
    if ((!s && t) || (s && !t)) {
      return false;
    }
  
    if (s.length !== t.length) {
      return false;
    }
  
    const sFrequency = {};
    const tFrequency = {};
  
    for (let char of s) {
      sFrequency[char] = (sFrequency[char] || 0) + 1;
    }
  
    for (let char of t) {
      tFrequency[char] = (tFrequency[char] || 0) + 1;
    }
  
    for (let char in sFrequency) {
      if (sFrequency[char] !== tFrequency[char]) {
        return false;
      }
    }
  
    return true;
}