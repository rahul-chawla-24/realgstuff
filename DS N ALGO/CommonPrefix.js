/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs[0]) return "";
  let flag = false;
  let result = "";
  let i = 0;
  loopFirst: for (let i = 0; i < strs[0].length; i++) {
    let charToCheck = strs[0].charAt(i);
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].charAt(i) == charToCheck) flag = true;
      else break loopFirst;
    }
    result += charToCheck;
  }
  return result;
};

// time complexity of the solution is O(N*M) where M is length of total strings and
// N is size of array (Worst Case)
// Space complexity of the solution is O(1) only constant space required