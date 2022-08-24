# Definition for a binary tree node.
#  0(n) - TC | 0(N) - SC

from typing import Collection, List
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        res = []
        queue = Collection.deque()
        queue.append(root)
        
        while queue:
            total = 0
            queueLen = len(queue)
            
            for _ in range(queueLen):
                node = queue.popleft()
                total += node.val
                if node.left: queue.append(node.left)
                if node.right: queue.append(node.right)
                
            res.append(total / queueLen)
            
        return res
        