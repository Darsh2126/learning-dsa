/* 
Input: arr = [2, 1, 5, 1, 3, 2], k = 3  
Output: 9  
Explanation: Subarray [5,1,3] has the maximum sum = 9

👣 Step-by-Step Approach:
Initialize windowSum = 0 and maxSum = -Infinity

Use a window of size k, slide it across the array

At each step:
1. Add the next element to windowSum
2. Subtract the element that’s no longer in the window
3. Update maxSum if windowSum is greater
*/

function maxSubarraySum(arr: number[], k: number) {
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    // Slide window once we've hit size k (Here k will be from user or test cases)
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[i - k + 1]; // Remove element going out of window
    }
  }
  return `This max Sum is ${maxSum}`;
}
// console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3));

/*
Pattern: First Negative Number in Every Window of Size K
🤔 Problem:
Given an array of integers, print the first negative number in every window (subarray) of size k.
If there is no negative number in the window, return 0.

arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
Output: [-1, -1, -7, -15, -15, 0]
*/

function findNegativeNumber(arr: number[], k: number) {
  const result: number[] = [];
  const negatives: number[] = [];

  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    if (arr[end] < 0) negatives.push(end);

    if (end - start + 1 === k) {
      // Add result from front of the queue
      if (negatives.length > 0) {
        result.push(arr[negatives[0]]);
        // If front of the queue is out of the window, remove it
        if (negatives[0] === start) negatives.shift();
      } else {
        result.push(0);
      }
      start++;
    }
  }

  return result;
}
console.log(findNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28], 3));

/*
🛠️ This Pattern Helps When:
You need to find minimum, maximum, or specific values (like negative) inside a fixed-size window.
Common in stock trend detection, sensor readings, or financial anomalies
*/
