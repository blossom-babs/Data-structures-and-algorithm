# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
from typing import Optional


class Solution:
    def hasPathSum(self, root: Optional[TreeNode], tsum: int) -> bool:
        if not root: return False
        
        if not root.left and not root.right:
            if tsum == root.val: return True
        
        return (self.hasPathSum(root.left, tsum - root.val) or
                self.hasPathSum(root.right, tsum - root.val))
        