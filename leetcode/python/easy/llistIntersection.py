from collections import defaultdict
from typing import List, Optional
import unittest

'''
create a singly linked list class to test the solution
'''
class ListNode:
  def __init__(self, x):
    self.val = x
    self.next = None

class LList(ListNode):
  def __init__(self):
    self.root = None

  def add(self, x):
    newNode = ListNode(x)
    if self.root == None:
      self.root = newNode
      return newNode

    head = self.root
    
    while head.next:
      head = head.next

    head.next = newNode
    return self.root


'''
https://leetcode.com/problems/intersection-of-two-linked-lists/
0(n) - SC | 0(m + n) - TC
'''

# .val and .root has been added for the sake of test, 
# in leetcode environment, you do not need .val and .root

def getInterSectNode(headA:ListNode, headB:ListNode) -> Optional[ListNode]:
  hash = defaultdict(lambda : False)
  A, B = headA.root, headB.root

  while A:
    hash[A.val] = True
    A = A.next

  while B:
    if hash[B.val]:
      return B.val 
    B = B.next
  
  return None

'''
https://leetcode.com/problems/intersection-of-two-linked-lists/
0(1) - SC | 0(m + n) - TC
'''

class constantSpaceSolution:
  def getLen(self, node:ListNode) -> int:
    _len = 0
    curr = node.root

    while curr:
      _len += 1
      curr = curr.next

    return _len

  def getInterSectNode(self, headA:ListNode, headB:ListNode) -> Optional[ListNode]:
    aLen = self.getLen(headA)
    bLen = self.getLen(headB)

    aPtr, bPtr = headA.root, headB.root

    if aLen < bLen:
      for i in range(bLen - aLen):
        bPtr = bPtr.next

    else:
      for i in range(aLen - bLen):
        aPtr = aPtr.next

    while aPtr and bPtr:
      if aPtr.val == bPtr.val:
        return aPtr.val

      aPtr = aPtr.next
      bPtr = bPtr.next

    return None



class TestSolution(unittest.TestCase):
  def test_getInterSectNode(self):
    list1, list2 = LList(), LList()
    list1.add(4), list1.add(5), list1.add(6)
    list2.add(3), list2.add(5), list2.add(6)

    list3 = constantSpaceSolution()
    res = list3.getInterSectNode(list1, list2)

    self.assertEqual(getInterSectNode(list1, list2), 5)
    self.assertEqual(res, 5)

  def test_NoneInput(self):
    list1, list2 = LList(), LList()
    list1.add(4), list1.add(5), list1.add(6)
    list2.add(7), list2.add(8), list2.add(9)

    list3 = constantSpaceSolution()
    res = list3.getInterSectNode(list1, list2)

    self.assertEqual(getInterSectNode(list1, list2), None)
    self.assertEqual(res, None)


if __name__ == "__main__":
  unittest.main()