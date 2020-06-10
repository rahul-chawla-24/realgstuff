/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let number = [];

  for (let i = 1; i <= numRows; i++) {
    let answer = [];
    for (let j = 0; j < i; j++) {
      if (j == 0 || j == i - 1) {
        answer.push(1);
      } else {
        answer.push(parseInt(number[i - 2][j - 1] + number[i - 2][j]));
      }
    }
    number.push(answer);
  }
  return number;
};
