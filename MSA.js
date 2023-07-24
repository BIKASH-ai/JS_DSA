// Problem Description
// Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

// Input format
// A single Integer M, that contains the number of elements in the first array.

// A single Integer N, that contains the number of elements in the second array.

// Next Line contains M space Integers of the array nums1.

// Next Line contains N space Integers of the array nums2.

// Output format
// Print the array after merging.

function mergeSortedArray(m, nums1, n, nums2) {
    let i = 0;
    let j = 0;
    let merged = [];

    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    while (i < m) {
        merged.push(nums1[i]);
        i++;
    }

    while (j < n) {
        merged.push(nums2[j]);
        j++;
    }

    return merged;
}