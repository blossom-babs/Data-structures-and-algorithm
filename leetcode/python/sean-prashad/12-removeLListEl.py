# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# create a dummy node
# update its pointers using prev
# 0(n) - TC | 0(1) - SC
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        dummy = ListNode(next=head)
        prev, curr = dummy, head
        
        while curr:
            nxt = curr.next
            
            if curr.val == val:
                prev.next = nxt
            else:
                prev = curr
                
            curr = nxt
        return dummy.next
        

# recursive solution - 0(n) - TC | 0(n) - sc
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        if head is None: return None
        nxt = self.removeElements(head.next, val)
        if head.val == val:
            head = nxt
        else:
            head.next = nxt
        return head
    
    # solution 1 pointer - 0(n) - tc | 0(1) - sc
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        dummy = cur = ListNode()
        dummy.next = head
        while cur.next:
            if cur.next.val == val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return dummy.next
        