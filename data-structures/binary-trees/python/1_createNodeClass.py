# create a python node

class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
        
root = Node(10)
print(root.data)
