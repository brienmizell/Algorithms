// Given five positive integers, find the minimum
// and maximum values that can be calculated by summing
// exactly four of the five integers. Then print the
// respective minimum and maximum values as a single line
// of two space-separated long integers.

// Sample Input

// [1, 2, 3, 4, 5]
// Sample Output

// [10, 14]

function miniMaxSum(arr) {
  arr.sort();
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min = min + arr[i];
    max = max + arr[i + 1];
  }
  console.log(min, max);
}
