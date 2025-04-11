/* 
Example 1: Reverse an Array
Example 2: Check if Array is palindrome
Example 3: Two Sum in sorted array
Example 4: Move zeros to the end
Example 5: Remove duplicates from Sorted Array
Example 6: Merge Sorted Array
Example 7: Container with Most Water
*/

/*
✅ 1. Reverse an Array
Input: [1, 2, 3, 4, 5] → Output: [5, 4, 3, 2, 1]

Approach: Two pointers from start and end, swap until they meet.

Time Complexity: O(n)

Space Complexity: O(1)

There are some exercises for practicing yourself below this example and see solutions in
exercise-solution/twoPointers.ts
*/

const arr1 = [1, 2, 3, 4];

function reverseArray(array: number[]) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    // array[left] = array[right]; -> This thing won't work because it will be swap only first part
    // Actual answer
    [array[left], array[right]] = [array[right], array[left]];
    console.log("values left part", [array[left], array[right]]);
    left++;
    right--;
  }
  return array;
}
// console.log("reverseArray: ", reverseArray(arr1));

/* 
🔄 Exercise 1: Swap First and Last Elements
  // Input:
let arr = [10, 20, 30, 40, 50];

// Expected Output:
[50, 20, 30, 40, 10]

🔄 Exercise 2: Swap Two Elements Given Indexes
// Input:
let arr = [1, 2, 3, 4, 5];
let i = 1;
let j = 3;

// Expected Output:
[1, 4, 3, 2, 5]

🔄 Exercise 3: Swap Elements in Pairs
// Input:
[10, 20, 30, 40]

// Output:
[20, 10, 40, 30]

*/
