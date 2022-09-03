# insert value into given Node

class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

    def insert(self, data):
        if self.data:
            if data < self.data:
                if self.left is None:
                    self.left = Node(data)
                else:
                    self.left.insert(data)
            elif data > self.data:
                if self.right is None:
                    self.right = Node(data)
                else:
                    self.right.insert(data)
        else:
            self.data = data
        # if no root node, make new data the root node
        # if there is root node, insert node at either the left or right side

    def printTree(self):
        print(self.data)
        if self.left:
            self.left.printTree()
        if self.right:
            self.right.printTree()
            
    def levelOrderTraversal(self, root):
      queue = [root]
      while queue:
        node = queue.pop(0)
        print(node.data)
        if node.left:
          queue.append(node.left)
        if node.right:
          queue.append(node.right)



root = Node(10)
root.insert(2)
root.insert(15)
root.insert(8)
root.insert(5)
root.insert(12)
# root.printTree()
print(root.levelOrderTraversal(root))
# 10, 2, 5, 8, 12, 15
