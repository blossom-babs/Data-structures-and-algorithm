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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// https://leetcode.com/problems/subtree-of-another-tree/
// 0(r * s) - tc | 0(r * s) - sc

 
 var isSubtree = function(root, subRoot) {
  if (subRoot && !root) return false
  
  if (isMatch(root, subRoot)) return true
  
  return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
  
};

const isMatch = function(r, s){
  if (r && s) {
     return (r.val === s.val && isMatch(r.left, s.left) && isMatch(r.right, s.right))
  }
  if(!r && s) return false
  if(r && !s) return false
  if(!r && !s) return true
}