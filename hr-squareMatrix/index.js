// Given a square matrix, calculate the absolute
// difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9

// The left-to-right diagonal = 1 + 5 + 9. The
// right to left diagonal = 9 + 5 + 3. Their
// absolute difference is |15 - 17| = 2.
function diagonalDifference(arr) {
  let backSlash = 0;
  let forwardSlash = 0;
  let length = arr.length - 1;
  console.log(length);

  for (let i = 0; i < arr.length; i++) {
    backSlash += arr[i][i];
    forwardSlash += arr[i][length];
    length--;
  }
  return Math.abs(backSlash - forwardSlash);
}
