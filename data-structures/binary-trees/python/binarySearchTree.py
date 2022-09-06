# create a python node

class Node:
    def __init__(self, data):
        self.root = data
        self.left = None
        self.right = None

    def insert(self, data):
        if self.root:
            if data < self.root:
                if self.left is None:
                    self.left = Node(data)
                else:
                    self.left.insert(data)
            if data > self.root:
                if self.right is None:
                    self.right = Node(data)
                else:
                    self.right.insert(data)
        
        else:
            self.root = data  
            
    def inorder(self, root):        
        res = []
        if root:
            res = self.inorder(root.left)
            res.append(root.root)
            res = res + self.inorder(root.right)
        return res
        

  
            

        '''
        10
     /      \
   2          20
    \         /  \
     7      15    87
             \
               17  
        '''


tree = Node(10)
tree.insert(2)
tree.insert(20)
tree.insert(15)
tree.insert(87)
tree.insert(7)
tree.insert(17)

print(tree.inorder(tree))

