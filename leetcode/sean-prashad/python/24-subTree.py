# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
from typing import Optional

# https://leetcode.com/problems/subtree-of-another-tree/
# 0(r * s) - tc | 0(r * s) - sc

class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if subRoot and not root: return False
        if self.isMatch(root, subRoot): return True
        
        return (self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot))
        
        
    def isMatch(self, r, s):
        if r and s:
            return r.val == s.val and self.isMatch(r.left, s.left) and self.isMatch(r.right, s.right)
        return r is s
        