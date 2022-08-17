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
      

# 0(n) - tc | 0(n) - sc
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        slow, fast = head, head
        
        #find the middle of the linked list
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            
        # reverse the middle of the linked list from the slow pointer
        prev = None
        while slow:
            temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
            
        # find palindrom
        left, right = head, prev
        while right:
            if left.val != right.val:
                return False
            left = left.next
            right = right.next
            
        return True
        