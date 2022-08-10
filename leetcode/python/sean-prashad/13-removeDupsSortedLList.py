# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
from typing import Optional

'''
https://leetcode.com/problems/remove-duplicates-from-sorted-list/
'''

class Solution:
  #0(n) - tc | 0(1) - sc
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head

        while curr and curr.next:
            if curr.val == curr.next.val:
                curr.next = curr.next.next
                continue
            curr = curr.next

        return head

# Question: Do you understand the difference between the above method and this?
# 0(n) - tc | 0(1) - sc
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head

        while curr:
            while curr.next and curr.val == curr.next.val:
                curr.next = curr.next.next

            curr = curr.next

        return head
     
    # two pointer  + set method 
    # 0(n) - tc | 0(1) - sc 
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:  
        if not head: return head
        prev, curr = head, head.next
        dups = set()
        dups.add(prev.val)
        
        while curr:
            if curr.val in dups:
                prev.next = curr.next
            else:
                dups.add(curr.val)
                prev = curr
                
            curr = curr.next
                
        return head
        
