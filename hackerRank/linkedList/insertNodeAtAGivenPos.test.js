/*
Run test: npm test ./hackerRank/linkedList/insertNodeAtAGivenPos.test.js
 */

describe('Insert node at a given position', () => {
  it('inserts node at a given position', () => {
    let node = new singlyLinkedList()
    node.insert(10)
    node.insert(20)
    let givenPos = node.insertAtPos(30, 1)
    expect(givenPos.next.data).toBe(30)
  })
})

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class singlyLinkedList {
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
  insertAtPos(data, position) {
    let newNode = new Node(data)

    if (position === 0) {
      this.head = newNode
      return this.head
    }

    let current = this.head
    let count = 0

    while (current) {
      if (count === position - 1) {
        let holder = current.next
        current.next = newNode
        newNode.next = holder
      }
      current = current.next
      count++
    }
    return this.head
  }
}