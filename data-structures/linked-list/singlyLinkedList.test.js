// Test: npm test ./data-structures/linked-list/singlyLinkedList.test.js

// insert at head: 0(1) - time | 0(1) - space
// insert at tail: 0(n) - time | 0(1) - space

describe('singly linked list function', () => {
  let list, listHead, listTail, insert;

  beforeEach(() => {
    list = new SinglyLinkedList()
  })

  it('inserts a given data at the head of a list', () => {
    listHead = list.insertAtHead(40)
    listHead = list.insertAtHead(50)
    expect(listHead.data).toBe(50)
  })

  it('inserts a given data at the tail of a list', () => {
    listTail = list.insertAtTail(40)
    listTail = list.insertAtTail(50)
    expect(listTail.next.data).toBe(50)
  })

  it('inserts at a given pos', () => {
    insert = list.insertAtTail(10)
    insert = list.insertAtTail(20)
    insert = list.insertAtTail(40)
    insert = list.insertAtGivenPos(30, 2)
    console.log('insert at a given pos', insert)
    //expect(list.next.next.data).toBe(30)
    expect(list.next.data).toBe(20)
  })
})

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {

  // 0(1) - time | 0(1) - space
  insertAtHead(data) {
    let newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      return this.head
    }
    let currentHead = this.head
    newNode.next = currentHead
    return newNode
  }

  // 0(n) - time | 0(1) - space
  insertAtTail(data) {
    let newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      return this.head
    }
    let currentHead = this.head
    while (currentHead.next) {
      currentHead = currentHead.next
    }
    currentHead.next = newNode
    return this.head
  }

  insertAtGivenPos(data, pos) {
    let newNode = new Node(data)
    let count = -1
    let current = this.head

    while (current.next) {
      if (count < pos) {
        let nxt = current.next
        current.next = newNode
        newNode.next = nxt
      } 
        count++
        current = current.next
    }
    return this.head
  }
}