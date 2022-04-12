describe('insert node at tail', () => {
it('inserts new node at the tail of linked list', () => {
  let newNode = new singlyLinkedList()
  newNode.insertAtTail(10)
  newNode.insertAtTail(20)
  expect(newNode.head.next.next.data).toBe(20)
})
})

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class singlyLinkedList{
  constructor(){
    this.head = new Node('head')
  }

insertAtTail(data){
let newNode = new Node(data)
let currData = this.head

  while(currData !== null){
    if (currData.next === null){
      currData.next = newNode
      newNode.next = null
    }
    currData = currData.next
  }
  return 2
  }
}
