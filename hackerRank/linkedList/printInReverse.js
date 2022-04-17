/* DAY 6 & 7 OF A 10-DAY LINKED LIST CHALLENGE WITH SODIQ AYILARA MD

https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem?isFullScreen=true

Test: npm test ./hackerRank/linkedList/printInReverse.test.js

0(n) - time | 0(1) - space
 */


/*
 * Complete the 'reversePrint' function below.
 *
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
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

function reversePrint(llist) {
  if (llist) {
    reversePrint(llist.next)
    console.log(llist.data)
  }
}

