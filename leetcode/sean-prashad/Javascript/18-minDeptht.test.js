/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 var minDepth = function (root) {
  if (root == null) return 0

  if (root.right == null && root.left == null) return 1

  if (root.right == null) {
    return 1 + minDepth(root.left)
  }

  if (root.left == null) {
    return 1 + minDepth(root.right)
  }

  return 1 + Math.min(minDepth(root.right), minDepth(root.left))
};