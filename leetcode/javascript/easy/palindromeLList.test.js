// https://leetcode.com/problems/palindrome-linked-list/
// Test: npm test ./leetcode/easy/palindromeLList.test.js

describe('#Palindrome linked list', () => {
  let llist;
  
  beforeEach(() => {
    llist = new singlyLList()
  })
  
  it('returns true if linked list is a palindrome ', () => {
    llist.insert(1); llist.insert(2); llist.insert(2); llist.insert(1);
    expect(isPalindromeTwo(llist.root)).toBe(true)
  })
  it('returns false if linked list not a palindrome', () => {
    llist.insert(1); llist.insert(2);
    expect(isPalindromeTwo(llist.root)).toBe(false)
  })
})

class LNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class singlyLList {
  constructor() {
    this.root = null
  }
  
  insert(data) {
    let nnode = new LNode(data)
    if (!this.root) {
      this.root = nnode
      return this.root
    }
    
    let curr = this.root
    while (curr.next) {
      curr = curr.next
    }
    
    curr.next = nnode
    return curr
  }
}

//0(n) - time | 0(1) - space
const isPalindromeTwo = head => {
  let [fast, slow] = [head, head]
  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next
  }

  let [curr, prev] = [slow, null]
  while(curr){
    const nxt = curr.next
    curr.next = prev
    prev = curr
    curr = nxt
  }

  let[left, right] = [head, prev]
  while(right){
    if(right.val !== left.val) return false
    right = right.next
    left = left.next
  }
  return true
}

//0(n) - time | 0(n) - space
const isPalindrome = head => {
  let curr = head
  let values = []
  
  while (curr) {
    values.push(curr.val)
    curr = curr.next
  }
  
  if (!curr && values.length > 0) {
    let l = 0
    let r = values.length - 1
    
    while (l < r) {
      if (values[l] !== values[r]) return false
      l++;
      r--
    }

  }
  return true
}