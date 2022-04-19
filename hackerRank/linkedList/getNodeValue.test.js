//www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem?isFullScreen=true
// Test: npm test ./hackerRank/linkedlist/getNodeValue.test.js

describe('get node value', () => {
  it('return the number at the node 3 from the tail position', () => {
    const list = new SinglyLinkedList()
    list.insert(10)
    list.insert(120)
    list.insert(30)
    list.insert(40)
    list.insert(50)
    let pos3 = list.getNodeValue(3)
    let pos2 = list.getNodeValue(2)
    expect(pos3).toBe(120)
    expect(pos2).toBe(30)
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

  getNodeValue(positionFromTail) {
    let head = this.head
    let hash = {}; let length = 0; let count = -1;

    while (head) {
      count++
      hash[count] = head.data
      length = Math.max(length, count)
      head = head.next
    }

    return hash[length - positionFromTail]
  }
}