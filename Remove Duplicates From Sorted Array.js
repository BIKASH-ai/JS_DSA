// Problem Description
// Given a sorted array, remove all duplicates such that each element occurs at most once in the array. Return the 
// length of the modified array.

// Note : The input array should be modified in-place i.e. no extra memory should be allocated to any other array and 
// the question should be solved by using O(1) memory.

function removeDuplicatesFromSortedArray(nums) {
    const n = nums.length;
    if (n <= 1) {
      return n;
    }
  
    let currentIndex = 1;
    for (let i = 1; i < n; i++) {
      if (nums[i] !== nums[i - 1]) {
        nums[currentIndex] = nums[i];
        currentIndex++;
      }
    }
  
    return currentIndex;
  }