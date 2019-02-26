// Given an array of integers, calculate the fractions
// of its elements that are positive, negative, and are zeros.
// Print the decimal value of each fraction on a new line rounded to six decimals.

// Sample Input

// [-4, 3, -9, 0, 4, 1]

// Sample Output

// 0.500000
// 0.333333
// 0.166667

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let denominator = arr.length;
  arr.forEach(n => {
    if (n > 0) {
      positive++;
    } else if (n < 0) {
      negative++;
    } else {
      zero++;
    }
  });
  console.log((positive / denominator).toFixed(6));
  console.log((negative / denominator).toFixed(6));
  console.log((zero / denominator).toFixed(6));
}
