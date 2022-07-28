# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

from typing import Optional

'''
https://leetcode.com/problems/linked-list-cycle/
'''

# Set patter
# 0(n) - tc | 0(n) - sc
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        cycle = set()
        while head:
            if head in cycle:
                return True
            cycle.add(head)
            head = head.next
        return False
      
      
# Floyd's cycle detection algorithm
# 0(n) - TC | 0(1) - SC
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = fast = head
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            
            if slow == fast:
                return True
        return False
        