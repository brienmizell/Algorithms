// Calculate and print the sum of the
// elements in an array, keeping in
// mind that some of those integers
// may be quite large.

// Sample Input
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output
// 5000000015

function aVeryBigSum(ar) {
  let theSum = 0;
  for (let i in ar) {
    theSum = theSum + ar[i];
  }
  return theSum;
}
