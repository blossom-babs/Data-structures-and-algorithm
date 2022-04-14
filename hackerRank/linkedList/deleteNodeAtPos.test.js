/*
TEST: npm test ./hackerRank/linkedList/deleteNodeAtPos.test.js
*/

describe('delete node', () => {
  it('deletes a node at a given position and returns the head', () => {
    const list = new SinglyLinkedList()
    list.insert(10)
    const deleteNode = list.delete(0)
    expect(deleteNode).toBe(null)
  })
})

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList{
  insert(data){
    let newNode = new Node(data)

    if(!this.head){
      this.head = newNode
      return this.head
    }

    let current = this.head

    while(current.next){
      current = current.next
    }

    current.next = newNode
    return current
  }

  delete(position){
    let nxt;

    if(position === 0){
      nxt = this.head.next
      this.head = nxt
      return this.head
    }

    let current = this.head
    let count = 0

    while(current){
      if(count === position - 1){
        nxt = current.next.next
        current.next = nxt
      }
      current = current.next
      count++
    }
    return this.head
  }
}