//https://leetcode.com/problems/add-two-numbers/
// test: npm test ./leetcode/medium/addTwoNumbers.test.js

describe('sum numbers in linked list', () => {
  let list, list1, list2, sum;

  beforeEach(() => {
    list1 = new SinglyLinkedList()
    list2 = new SinglyLinkedList()
    list = new SinglyLinkedList()
  })

  it('sums number in reverse and returns linked list', () => {
    list1.insert(9)
    list1.insert(9)
    list2.insert(9)
    sum = list.sumTwoList(list1, list2)
    expect(sum.data).toBe(8)
    expect(sum.next.data).toBe(0)
  })

  it('sums number in reverse and returns linked list', () => {
    list1.insert(2)
    list1.insert(4)
    list1.insert(3)
    list2.insert(5)
    list2.insert(6)
    list2.insert(4)
    sum = list.sumTwoList(list1, list2)
    expect(sum.data).toBe(7)
    expect(sum.next.next.data).toBe(8)
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
    return this.head
  }

  sumTwoList(list1, list2) {
    list1 = list1.head
    list2 = list2.head

    let sum, numeral;
    let carry = 0;
    let newNode = new Node(0)
    let head = newNode

    while (list1 || list2 || carry !== 0) {
      sum = 0
      if (list1) {
        sum += list1.data
        list1 = list1.next
      }

      if (list2) {
        sum += list2.data
        list2 = list2.next
      }

      sum += carry
      carry = parseInt(sum / 10)
      numeral = sum % 10
      let newItem = new Node(numeral)
      head.next = newItem
      head = newItem
    }

    return newNode.next
  }
}

