/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (n == 1 || m == 1) {
    return 1;
  }
  return uniquePaths(n - 1, m) + uniquePaths(n, m - 1);
  
};
