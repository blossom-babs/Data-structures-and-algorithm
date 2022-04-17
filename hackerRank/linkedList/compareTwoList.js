/* DAY 8 OF A 10-DAY CODE CHALLENGE WITH SODIQ AYILARA MD

https://www.hackerrank.com/challenges/compare-two-linked-lists/problem?isFullScreen=true

Test: npm test ./hackerRank/linkedList/compareTwoList.test.js
 */

// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
  let list1 = llist1
  let list2 = llist2

  while (list1 && list2) {
    if (list1.data === list2.data) {
      list1 = list1.next
      list2 = list2.next
    } else {
      return 0
    }
  }
  return list1 || list2 ? 0 : 1
}

