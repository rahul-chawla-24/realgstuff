/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let numberString = x.toString();
  return helper(numberString, 0, parseInt(numberString.length - 1));
};

var helper = function(numberString, start, end) {
  let mid = Math.floor(parseInt(numberString.length / 2));
  if (start == mid) {
    return true;
  }
  if (numberString.charAt(start) != numberString.charAt(end)) {
    return false;
  }
   return helper(numberString, ++start, --end);
};
