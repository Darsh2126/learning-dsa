/*

Find the smallest number in [5, 1, 9, 2, 0, 6]

Count how many times 2 appears in [2, 3, 2, 4, 2, 5]

Find the average of [10, 20, 30, 40]
*/

let arr = [5, 1, 9, 2, 0, 6];
let arr2 = [2, 3, 2, 4, 2, 5];
let arr3 = [10, 20, 30, 40];
// Question first
function smallestNumber(arrayVal: number[]) {
  let smallVal = Infinity;

  for (const data of arrayVal) {
    if (data < smallVal) {
      smallVal = data;
    }
  }
  return smallVal;
}

console.log("Smallest number is: ", smallestNumber(arr));

// Question second
function findRepeatingPattern(arraVal: number[]) {
  let count = 0;
  const finding2 = 2;

  for (const data of arraVal) {
    if (data === finding2) {
      count++;
    }
  }
  return count;
}

console.log("Repeating two is: ", findRepeatingPattern(arr2));

// Question third
function averageValue(arrVal: number[]) {
  let avgTotal = 0;

  for (const data of arrVal) {
    avgTotal = avgTotal + data;
  }
  return avgTotal / arrVal.length;
}

console.log("Average total is: ", averageValue(arr3));
