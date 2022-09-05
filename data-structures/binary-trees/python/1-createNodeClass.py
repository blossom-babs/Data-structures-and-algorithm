# create a python node

class Node:
    def __init__(self, data):
        self.root = data
        self.left = None
        self.right = None

    def insert(self, data):
        # is there a root?
        # no? make the new value the root
        # yes? do we put it as the left or right child?
        # is the value less than the root? yes, put it on the left child
        # is the value greater than the root? put it on the right child
        
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


    def printTree(self):
        if self.left:
            self.left.printTree()
        if self.right:
            self.right.printTree()
        print(self.root)
        
    
    def bfs(self, root):
        queue = [root]
        while queue:
            node = queue.pop(0)
            print(node.root)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
            

        '''
        10
     /       \
   2          20
 \            / \ 
  7         15  87
             \
              17
        '''


root = Node(10)
root.insert(2)
root.insert(20)
root.insert(15)
root.insert(87)
root.insert(7)
root.insert(17)
root.bfs(root)

