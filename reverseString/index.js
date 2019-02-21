// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   // turn string into an array.
//   const arr = str.split("");
//   // call reverse method.
//   arr.reverse();
//   // join the array back into a string.
//   // return the result.
//   return arr.join("");
// }

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

function reverse(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}
reverse("hello");

module.exports = reverse;
