// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
// Test: npm test ./hackerRank/linkedList/cycleDetection.test.js
// 0(n) - space | 0(n) - time

function hasCycle(head){
  let list = head
  let hash = new Map()

  while(list){
    if(hash.has(list.data)){return 1}
    else {
      hash.set(list.data, true)
      list = list.next
    }
  }
  return 0
}