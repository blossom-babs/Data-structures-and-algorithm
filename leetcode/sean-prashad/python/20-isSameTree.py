# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Bfs 0(N) - TC | SC
# https://leetcode.com/problems/same-tree/


class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        queue = [(p, q)]

        while queue:
            node1, node2 = queue.pop(0)

            if not node1 and not node2:
                continue
            elif not node1 or not node2:
                return False
            else:
                if node1.val != node2.val:
                    return False
                queue.append((node1.left, node2.left))
                queue.append((node1.right, node2.right))
        return True

# Dfs
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        node1, node2 = p, q

        if not node1 and not node2:
            return True
        if not node1 or not node2:
            return False

        if node1.val != node2.val:
            return False
        return (self.isSameTree(node1.left, node2.left) and self.isSameTree(node1.right, node2.right))
