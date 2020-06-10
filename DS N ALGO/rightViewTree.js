/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function(root) {
  let number = [];
  var rightSideViewHelper = function(root, level, results) {
    if (!root) {
      return;
    }
    
    if (level == results.length) {
      results.push(root.val);
    }

    rightSideViewHelper(root.right, level + 1, results);
    rightSideViewHelper(root.left, level + 1, results);
  };
  rightSideViewHelper(root, 0, number);
  return number;
};
