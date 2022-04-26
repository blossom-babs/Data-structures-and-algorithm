//https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem?isFullScreen=true
// Test: npm test ./hackerRank/linkedList/reverseDoublyLinkedlist.test.js
// 0(n) - time | 0(n) - space

describe('reverse doubly linked list', () => {
  it('reverses a doubly linked list in place', () => {
    const list = new DoublyLinkedList()
    list.insert(10)
    list.insert(20)
    list.insert(30)
    let listReverse = list.reverse()
    expect(listReverse.data).toBe(30)
    expect(listReverse.prev).toBe(null)
    expect(listReverse.next.prev.data).toBe(30)
  })
})

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
    return this.head
  }

  reverse() {
    if (!this.head) return

    let prev = null
    let current = this.head

    while (current) {
      let nxt = current.next
      current.next = prev
      current.prev = nxt
      prev = current
      current = nxt
    }
    return prev
  }
}

