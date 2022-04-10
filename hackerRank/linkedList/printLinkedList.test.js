describe('print the element of a linked list', () => {
  it('returns the el in a list', () => {
    let list = new LList()
    list.insert(2, 'head')
    list.insert(16, 2)
    list.insert(18, 6)
    expect(list.size).toBe(3)
    expect(list.head.next.element).toBe(2)
    expect(list.display()).toStrictEqual([16, 18])
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
    let currNode = this.head.next
    let values = []
    while (currNode !== null && this.size > 1) {
      console.log(currNode.next.element)
      values.push(currNode.next.element)
      currNode = currNode.next
      this.size--
    }
    return values
  }
}

