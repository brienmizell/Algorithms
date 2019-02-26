// Consider a staircase of size n = 4

// #
// ##
// ###
// ####

// Print a staircase of size n using # symbols and spaces.

function staircase(n) {
  let numberSpaces = n - 1;
  for (let i = 0; i < n; i++) {
    let hash = "#";
    let mySpaces = " ".repeat(numberSpaces);
    console.log(mySpaces + hash.repeat(i + 1));
    numberSpaces--;
  }
}
