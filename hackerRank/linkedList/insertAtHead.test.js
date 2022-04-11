describe('#insertAtHead', () => {
  it('inserts node at head of linked list', () => {
    const newNode = new SinglyLinkedList()
    newNode.insertAtHead(10)
    const oldHead = newNode.head
    newNode.insertAtHead(20)
    expect(newNode.head.data).toBe(20)
    expect(oldHead.data).toBe(10)
    expect(newNode.size).toBe(2)
  })
})

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.size = 0
  }

  insertAtHead(element) {
    const newNode = new SinglyLinkedListNode(element)
    newNode.next = this.head
    this.head = newNode
    this.size++
  }
};