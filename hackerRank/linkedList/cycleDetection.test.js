// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
// Test: npm test ./hackerRank/linkedList/cycleDetection.test.js
// 0(n) - space | 0(n) - time

describe('cycle detection', () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedList()
  })
  it('returns 1 if there is a cycle detection', () => {
    list.insert(1)
    list.insert(-1)
    list.insert(1)
    let cycle = list.hasCycle()
    expect(cycle).toStrictEqual(1)
  })
  it('returns 0 if there is no cycle detection', () => {
    list.insert(1)
    list.insert(2)
    list.insert(3)
    let cycle = list.hasCycle()
    expect(cycle).toStrictEqual(0)
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

  hasCycle() {
    let list = this.head
    let hash = new Map()
    while (list) {
      if (hash.has(list.data)) { return 1 }
      else { hash.set(list.data, true) }
      list = list.next
    }
    return 0
  }
}




