/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root;

  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.right = left;
  root.left = right;
  return root;
};

// time complexity of is o(n) as traversing to each node
// space complexit is O(1) constant space required
