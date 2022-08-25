# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None: return 0
        
        leftDepth = self.maxDepth(root.left)
        
        rightDepth = self.maxDepth(root.right)
        
        if root.left is None and root.right is None: return 1
        
        if root.left is None: return rightDepth + 1
        
        if root.right is None: return leftDepth + 1
        
        return max(leftDepth, rightDepth) + 1
        
        