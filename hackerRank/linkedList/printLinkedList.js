/* https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem?isFullScreen=true

complexity anaysis
0(n) - time
0(1) - space
*/
function printLinkedList(head) {
  let currEl = head

  while(currEl !== null){
    console.log(currEl.data)
    currEl = currEl.next

  }
}