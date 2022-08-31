/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// https://leetcode.com/problems/same-tree/
// BFS - O(N) - TC & SC
var isSameTree = function (p, q) {
  const queue = [[p, q]]

  while (queue.length) {
    const [p, q] = queue.shift()

    if (!p && !q) continue
    if (!p || !q) return false
    if (p.val !== q.val) return false

    if (p && q) {
      queue.push([p.right, q.right])
      queue.push([p.left, q.left])
    }

  }
  return true
};

// Recursive DFS 0(N) - TC & SC
var isSameTree = function (p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false

  return isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
};