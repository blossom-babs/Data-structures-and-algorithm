// this question has already been solved during a leetcode practice.
// Find test here: npm test ./leetcode/linked-list/mergeLinkedList.test.js
// 0(n) - t | 0(n) - space
// https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
  let dummyNode = new SinglyLinkedListNode(0)
  let merged = dummyNode

  while (true) {
    if (!head1) {
      merged.next = head2;
      break;
    }
    if (!head2) {
      merged.next = head1;
      break;
    }
    if (head1.data <= head2.data) {
      merged.next = head1
      head1 = head1.next
    } else {
      merged.next = head2
      head2 = head2.next
    }
    merged = merged.next
  }
  return dummyNode.next
}
