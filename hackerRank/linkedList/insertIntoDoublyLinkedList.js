//www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem?isFullScreen=true
// test: npm test ./hackerRank/linkedList/insertIntoDoublyLinkedList.test.js
// 0(1) - space | 0(n) - time
/*
 * Complete the 'sortedInsert' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_DOUBLY_LINKED_LIST llist
 *  2. INTEGER data
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function sortedInsert(llist, data) {
  // Write your code here
  let list = llist
  let newNode = new DoublyLinkedListNode(data)

  if (!list) {
    list = newNode
    return list
  }

  if (data < list.data) {
    list.prev = newNode
    newNode.next = list
    return newNode
  }

  while (list) {
    if (data >= list.data && list.next === null) {
      list.next = newNode
      newNode.prev = list
      return llist;
    }
    if (list.next.data >= data) {
      newNode.next = list.next
      newNode.prev = list
      list.next = newNode
      list.next.prev = newNode
      return llist
    }

    list = list.next

  }
  return llist
}
