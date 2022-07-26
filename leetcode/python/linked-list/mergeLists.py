# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

'''
https://leetcode.com/problems/merge-two-sorted-lists/
0(n) - tc | 0(n) - sc
'''

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        tail = dummy
        
        while True:
            if not list1:
                tail.next = list2
                break
            elif not list2:
                tail.next = list1
                break
            elif list1.val <= list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next
        return dummy.next
        