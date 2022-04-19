// day 10 linked list challenge
//https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem?isFullScreen=true
/*
 * Complete the 'getNode' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER positionFromTail
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

// 0(n) - space | 0(n) - time
// Test: npm test ./hackerRank/linkedList/getNodeValue.test.js

function getNode(llist, positionFromTail) {
  let hash = {}; let count = -1; let length = 0

  while (llist) {
    count++
    hash[count] = llist.data
    length = Math.max(length, count)
    llist = llist.next
  }
  return hash[length - positionFromTail]
}

