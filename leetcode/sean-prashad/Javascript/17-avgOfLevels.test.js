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
 * @return {number[]}
 */

// 0(n) - TC | 0(N) - SC
 var averageOfLevels = function(root) {
  let res = []
  let queue = [root]
  
  while(queue.length){
      let total = 0
      queueLen = queue.length
      
      for(let i = 0; i < queueLen; i++){
          node = queue.shift()
          total += node.val
          
          if(node.left) queue.push(node.left)
          if(node.right) queue.push(node.right)
      }
      res.push(total / queueLen)
  }
  return res
};