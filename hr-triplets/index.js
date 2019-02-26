function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0;
  for (let i in a) {
    if (a[i] > b[i]) {
      aScore++;
    } else if (a[i] < b[i]) {
      bScore++;
    }
  }
  return [aScore, bScore];
}
