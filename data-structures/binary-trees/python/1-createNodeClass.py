# create a python node

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        
    def printTree(self):
        print(self)

root = Node(10)
root.printTree()