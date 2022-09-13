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
 * @return {TreeNode}
 */

// 0(n) - time | 0(n) - space
// https://leetcode.com/problems/invert-binary-tree/

 const invertTree = function(root) {
  if(!root) return root

  let temp = root.left
  root.left = root.right
  root.right = temp

   invertTree(root.right)
   invertTree(root.left)
   
   return root
};