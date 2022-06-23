/* 
Test: Run test: npm test ./leetcode/linked-list/reverseLinkedList.test.js

Source: https://leetcode.com/problems/reverse-linked-list/

complexity analysis: 0(n) - time | 0(1) - space
*/

describe('reverse linked list', () => {
  it('reverses a linked list iteratively', () => {
    let list = new SinglyLinkedList()
    list.insert(10)
    list.insert(20)
    list.insert(30)
    const reverse = list.reverse()
    expect(reverse.data).toBe(30)
    expect(reverse.next.next.data).toBe(10)
  })
})

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {
  insert(data) {
    let newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      return this.head
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
    return current
  }

  reverse() {
    let prev = null
    let curr = this.head

    while (curr) {
      let nxt = curr.next
      curr.next = prev
      prev = curr
      curr = nxt
    }
    return prev
  }
}