// https://leetcode.com/problems/palindrome-linked-list/
// Test: npm test ./leetcode/easy/palindromeLList.test.js
//0(n^2) - time | 0(n) - space

describe('#Palindrome linked list', () => {
  let llist;

  beforeEach(() => {
    llist = new singlyLList()
  })

  it('returns true if linked list is a palindrome ', () => {
    llist.insert(1); llist.insert(2); llist.insert(2); llist.insert(1);
    expect(isPalindrome(llist.root)).toBe(true)
  })
  it('returns false if linked list not a palindrome', () => {
    llist.insert(1); llist.insert(2);
    expect(isPalindrome(llist.root)).toBe(false)
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

