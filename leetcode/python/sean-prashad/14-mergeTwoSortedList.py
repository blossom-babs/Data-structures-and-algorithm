# Definition for singly-linked list.
from typing import Optional

'''
https://leetcode.com/problems/merge-two-sorted-lists/submissions/
'''
# 0(m + n) - TC

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
  # recursive
  # 0(n) - SC
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        def merge(l1, l2):
            if not l1:
                return l2
            if not l2:
                return l1

            if l1.val <= l2.val:
                l1.next = merge(l1.next, l2)
                return l1
            else:
                l2.next = merge(l1, l2.next)
                return l2
        return merge(list1, list2)

    # iterative
    # 0(1) - SC
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
