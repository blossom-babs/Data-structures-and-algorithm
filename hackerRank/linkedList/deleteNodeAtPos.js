/* DAY 5 OF A 10-DAY LINKED LIST CHALLENGE WITH SODIQ AYILARA MD

https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem?isFullScreen=true

Test: npm test ./hackerRank/linkedList/deleteNodeAtPos.test.js

0(n) - time | 0(1) - space
 */


/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function deleteNode(llist, position) {
  let nxt;

  if (position === 0) {
    nxt = llist.next
    llist = nxt
    return llist
  }

  let count = 0
  let current = llist

  while (current) {
    if (count === position - 1) {
      nxt = current.next.next
      current.next = nxt
    }
    current = current.next
    count++
  }
  return llist
}
