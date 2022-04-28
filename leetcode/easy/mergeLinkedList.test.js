// https://leetcode.com/problems/merge-two-sorted-lists/
// Test: npm test ./leetcode/linked-list/mergeLinkedList.test.js
// 0(n) - time | 0(n) - space

describe('merge two linked list', () => {

  let list, list1, list2
  beforeEach(() => {
    list = new SinglyLinkedList()
    list1 = new SinglyLinkedList()
    list2 = new SinglyLinkedList()
  })

  it('merge sorted linked list', () => {
    list1.insert(10)
    list1.insert(20)
    list1.insert(50)
    list1.insert(80)

    list2.insert(10)
    list2.insert(20)
    list2.insert(30)

    let mergeNodes = list.merge(list1, list2)
    expect(mergeNodes.next.next.data).toBe(20)

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

  merge(list1, list2) {
    let head1 = list1.head
    let head2 = list2.head

    let dummyNode = new Node(0)
    let tail = dummyNode

    while (true) {
      if (!head1) {
        tail.next = head2
        break;
      }
      if (!head2) {
        tail.next = head1
        break
      }
      if (head1.data <= head2.data) {
        tail.next = head1
        head1 = head1.next
      } else {
        tail.next = head2
        head2 = head2.next
      }

      tail = tail.next
    }
    return dummyNode.next
  }
}