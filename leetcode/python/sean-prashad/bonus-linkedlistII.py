class Solution:
  def findCycle(head):
    slow = fast = head
    while fast and fast.next:
      slow = slow.next
      fast = fast.next.next
      
      if slow == fast:
        break
      return None
      
    pointer = head
    
    while pointer:
      if pointer == fast:
        return pointer
      pointer = pointer.next
      fast = fast.next