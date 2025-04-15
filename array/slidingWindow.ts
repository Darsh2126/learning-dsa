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
