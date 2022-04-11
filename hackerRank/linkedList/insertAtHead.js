/* https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem

complexity analysis
0(1) - space
0(1) - time
 */


function insertNodeAtHead(head, data) {
  if(head === null) return new SinglyLinkedListNode(data)
  
  let llist = new SinglyLinkedListNode(data)
  llist.next = head
  return llist
}
