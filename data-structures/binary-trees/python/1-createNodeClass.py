# create a python node

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        
    def printTree(self):
        print(self.data)
      
'''
              10
           /     \
        67         2
       /
    87
'''  
      
root = Node(10)
root.right = Node(2)
root.left = Node(67)
root.left.left = Node(87)
root.left.left.printTree()

