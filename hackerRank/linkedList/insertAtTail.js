/* https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

complexity analysis
0(n) - time | 0(1) - space

 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertAtTail(head) {
  let newNode = new SinglyLinkedListNode(head)

  if (!head) {
    head = newNode
    return head
  }

  let current = head

  while (current.next) {
    current = current.next
  }

  current.next = newNode
  return current
}