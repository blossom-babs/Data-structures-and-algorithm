'''
https://leetcode.com/problems/palindrome-linked-list/
'''
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def isPalindrome(self, head:ListNode) -> bool:
        llist = []
        
        while head:
            llist.append(head.val)
            head = head.next
            
        left = 0
        right = len(llist) - 1
      
        while left < right:
            # print(llist[left], llist[right])
            if llist[left] != llist[right]:
                return False
            left += 1
            right -= 1
        return True