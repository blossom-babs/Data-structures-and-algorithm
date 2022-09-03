# create a python node

class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
        
    def printTree(self):
        print(self.data)
        
root = Node(10)
root.printTree()
