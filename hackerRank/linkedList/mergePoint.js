//https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem
// 0(mn) - time | 0(1) - space
// tests: pending

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
  let m = length(headA)
  let n = length(headB)
  let list = headB


  for (let i = 0; i < m; i++) {
    headB = list
    for (let j = 0; j < n; j++) {
      if (headA === headB) {
        return headA.data
      } else {

        headB = headB.next

      }
    }
    headA = headA.next
  }
}

function length(head) {
  let list = head
  let len = 0
  while (list) {
    len++
    list = list.next
  }
  return len
}

