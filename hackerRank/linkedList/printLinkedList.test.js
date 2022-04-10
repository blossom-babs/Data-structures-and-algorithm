describe('print the element of a linked list', () => {
  it('returns the el in a list', () => {
    expect(printLinkedList(2)).toContain()
  })
})

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LList {
  constructor() {
    this.head = new Node('head')
    this.size = 0
  }

  find(item) {
    let currNode = this.head
    while (currNode !== item && currNode.next !== null) {
      currNode = currNode.next
    }
    return currNode
  }

  // this function assumes newEl is inserted after item in a linked list
  insert(newEl, item) {
    let newNode = new Node(newEl)
    let current = this.find(item)
    if (current.next) {
      newNode.next = current.next
    } else {

      newNode.next = null
    }
    current.next = newNode
    this.size++
  }

  display() {
    let currNode = this.head
    while (currNode !== null && this.size > 0) {
      console.log(currNode.next.element)
      currNode = currNode.next
      this.size--
    }
  }
}

const node1 = new LList()
node1.insert(2, 'head')
node1.insert(16, 2)
node1.insert(18, 6)
let testvalues = node1.display()

function printLinkedList(head) {
  let currEl = head

  while(currEl !== null){
    console.log(currEl.data)
    currEl = currEl.next

  }
}