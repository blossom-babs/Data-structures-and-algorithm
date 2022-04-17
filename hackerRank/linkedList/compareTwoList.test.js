/* Test: npm test ./hackerRank/linkedList/compareTwoList.test.js */

describe('compare lists', () => {

  let list, list1, list2

  beforeEach(() => {
    list = new SinglyLinkedList()
    list1 = new SinglyLinkedList()
    list2 = new SinglyLinkedList()
  })

  it('returns 0 if lists are not the same', () => {
    list1.insert(10)
    list1.insert(20)
    list1.insert(30)
    list2.insert(10)
    list2.insert(20)
    expect(list.compare(list1, list2)).toBe(0)
  })

  it('returns 1 if list are the same', () => {
    list1.insert(10)
    list1.insert(20)
    list2.insert(10)
    list2.insert(20)
    expect(list.compare(list1, list2)).toBe(1)
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
    this.head = newNode
    this.head.next = current

    return this.head
  }

  compare(list1, list2) {
    let head1 = list1.head
    let head2 = list2.head

    while (head1 && head2) {
      if (head1.data !== head2.data) {
        return 0
      }
      head1 = head1.next
      head2 = head2.next
    }

    return head1 || head2 ? 0 : 1
  }
}