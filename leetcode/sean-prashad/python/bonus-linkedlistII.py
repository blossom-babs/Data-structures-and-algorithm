# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


'''
https://leetcode.com/problems/linked-list-cycle-ii/submissions/
'''

# set solution
# 0(n) - tc | 0(n) - sc


class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        hash = set()
        current = head

        while current:
            if current in hash:
                return current
            hash.add(current)
            current = current.next

        return None


class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = fast = pointer = head
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            
            if fast == slow:
                slow = head
                while slow != fast:
                    slow = slow.next
                    fast = fast.next
                return slow
    
        return None
        