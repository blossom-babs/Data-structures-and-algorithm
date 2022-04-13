/* https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?isFullScreen=true

0(n) - time | 0(1) - space

 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
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

function insertNodeAtPosition(llist, data, position) {
  // Write your code here
  let newNode = new SinglyLinkedListNode(data)

  if (position === 0) {
    llist = newNode
    return llist
  }

  let current = llist
  let count = 0

  while (current) {
    if (count === position - 1) {
      let posHolder = current.next
      current.next = newNode
      newNode.next = posHolder
    }
    current = current.next
    count++
  }
  return llist
}
