# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
from typing import Optional

'''
https://leetcode.com/problems/middle-of-the-linked-list/
'''

# 0(n) - tc | 0(1) - sc
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = fast = head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
        return slow
        
        
# Brute force approach
# 0(n ^ 2) - TC | 0(1) - sc
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        listLen = 0
        temp = head
        
        while temp:
            listLen += 1
            temp = temp.next
            
        mid = listLen // 2
        pos = 0
        
       
        while head:
            if pos == mid:
                return head
            head = head.next
            pos += 1
        