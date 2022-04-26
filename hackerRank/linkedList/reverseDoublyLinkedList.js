//https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem?isFullScreen=true
// Test: npm test ./hackerRank/linkedList/reverseDoublyLinkedlist.test.js
// 0(n) - time | 0(n) - space


/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts INTEGER_DOUBLY_LINKED_LIST llist as parameter.
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

function reverse(llist) {
    // Write your code here
    let current = llist
    if (!current) return;

    let temp = null

    while (current) {
        let ptr2 = current.next
        current.next = temp
        current.prev = ptr2
        temp = current
        current = ptr2
    }

    if (temp) {
        llist = temp
    }

    return llist

}