# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
        # 0(n) - time | 0(n) - space
        # https://leetcode.com/problems/invert-binary-tree/
        
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root: return root
        
        tmp = root.left
        root.left = root.right
        root.right = tmp
        
        self.invertTree(root.left)
        self.invertTree(root.right)
        
        return root