module.exports = function reverse(num) { return parseFloat(num.toString().split('').reverse().toString().replace(/,/g, '')); }

// первый способ:
// module.exports = function reverse(num) {
//   let x = num.toString().length;
//   let revInt = "";
//   while (x > 0) {
//     revInt = revInt + num.toString()[x - 1];
//     x--;
//   }
//   return parseFloat(revInt);
// };