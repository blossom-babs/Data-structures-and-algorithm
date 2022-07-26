import unittest

class Node:
  def __init__(self, data=None):
    self.data = data
    self.next = None
    
class LinkedList:
  def __init__(self):
    self.head = Node()
    self.length = 0
    
  def append(self, data):
    newNode = Node(data)
    
    if self.head.data == None: 
      self.head = newNode
      self.length += 1
      return self.head
    
    currNode = self.head
    
    while currNode.next:
      currNode = currNode.next
      
    currNode.next = newNode
    self.length += 1
    
  def display(self):
    elems = []
    currNode = self.head
    while currNode:
      elems.append(currNode.data)
      currNode = currNode.next
    return elems
    
  def get(self, idx):
    currIdx = 0
    currNode = self.head
    
    if idx >= self.length:
      return 'ERROR: idx out of bounds'
    
    while True:
      if currIdx == idx:
        return currNode.data
      currIdx += 1
      currNode = currNode.next
      
  def erase(self, idx):
    currIdx = 0
    currNode = self.head
    
    if idx >= self.length:
      return 'ERROR: idx is out of bounds'
    
    while True:
      prevNode = currNode
      currNode = currNode.next
      
      if idx == currIdx:
        prevNode.next = currNode.next
        return
      currIdx += 1
      

class Test(unittest.TestCase):
  def test_sLList(self):
    llist = LinkedList()
    llist.append(1)    
    llist.append(2)    
    llist.append(3)    
    llist.append(4)
    llist.append(5)
    llist.append(6)
    llist.append(7)
    self.assertEqual(llist.length, 7)
    self.assertEqual(llist.get(4), 5)
    llist.erase(4)
    self.assertEqual(llist.display(), [1, 2, 3, 4, 5, 7])

if __name__ == "__main__":
  unittest.main()