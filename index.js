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
    let currNode = this.head.next
    while (currNode !== null && this.size > 1) {
      console.log(currNode.next.element)
      currNode = currNode.next
      this.size--
    }
    return ''
  }
}

const node1 = new LList()
node1.insert(2, 'head')
node1.insert(16, 2)
node1.insert(18, 6)
node1.display()