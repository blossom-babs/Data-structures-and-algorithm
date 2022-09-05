# create a python node

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        
    def printTree(self):
        print(self.data)
        
        
    def insert(value):
        # is there a root? 
        # no? make the new value the root
        # yes? do we put it as the left or right child?
        # is the value less than the root? yes, put it on the left child
        # is the value greater than the root? put it on the right child
        '''
        10
     /       \
2            20
             / \ 
        15        87
             
        '''

root = Node(10)
# root.right = Node(23)
# root.left = Node(5)
# root.right.left.right.lef = Node(15)
# root.right.right.printTree()