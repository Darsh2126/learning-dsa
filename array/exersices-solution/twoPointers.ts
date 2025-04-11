/*
🔄 Exercise 1: Swap First and Last Elements
  // Input:
let arr = [10, 20, 30, 40, 50];

// Expected Output:
[50, 20, 30, 40, 10]
*/

let exercise1 = [10, 20, 30, 40, 50];
const exercise1Sol = (arr: number[]) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    // This will be only runs one time
    left = right;
  }
  return arr;
};

// console.log("Solution 1: ", exercise1Sol(exercise1));

/*
🔄 Exercise 2: Swap Two Elements Given Indexes
// Input:
let arr = [1, 2, 3, 4, 5];
let i = 1;
let j = 3;
*/
let exercise2 = [1, 2, 3, 4, 5];

const exercise2Sol = (arr: number[], index1: number, index2: number) => {
  // will check if index value is valid or not
  if (
    index1 >= 0 &&
    index2 >= 0 &&
    (arr.length - 1 >= index1 || arr.length - 1 >= index2)
  ) {
    while (index1 < index2) {
      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
      index1 = index2;
    }
  }
  return arr;
};
// console.log("Solution 2:", exercise2Sol(exercise2, 1, 2));

/* 🔄 Exercise 3: Swap Elements in Pairs
// Input:
[10, 20, 30, 40]

// Output:
[20, 10, 40, 30]
*/
