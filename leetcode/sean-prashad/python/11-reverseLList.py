# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


'''
https://leetcode.com/problems/reverse-linked-list
'''


class Solution:
    # 0(n) - tc | 0(n) - sc
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def reverse(curr, prev):
            if curr is None: return prev
    
            nxt = curr.next
            curr.next = prev
            return reverse(nxt, curr)
        return reverse(head, None)

    # iterative 0(n) - tc | 0(1) - sc
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = None, head
        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        return prev
