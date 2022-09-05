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
     /       \
 5             23
             /
             15     
        '''

root = Node(10)
root.right = Node(23)
root.left = Node(5)
root.right.left = Node(15)
root.right.right.printTree()