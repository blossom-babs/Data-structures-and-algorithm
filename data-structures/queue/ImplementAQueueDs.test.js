// Implement a  Queue data structure
// Test: npm test ./data-structures/queue/ImplementAQueueDs.test.js

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue()
  })

  it('adds elemets to a queue', () => {
    queue.enqueue(5); queue.enqueue(7); queue.enqueue(8); queue.enqueue(7)
    expect(queue.datastore).toStrictEqual([5, 7, 8, 7])
    expect(queue.size).toBe(4)
  })
})

class Queue {
  constructor() {
    this.datastore = []
    this.size = 0
  }

  enqueue(data) {
    this.datastore[this.datastore.length++] = data
    this.size++
    return this.datastore
  }

  dequeue() {
    this.datastore.splice(0, 1)
    this.size--
    return this.datastore
  }

  peek() {
    return this.datastore[0]
  }

  backPeek() {
    return this.datastore[this.size - 1]
  }

  isEmpty() {
    return this.size === 0
  }

  display() {
    let items = ''
    for (let item of this.datastore) {
      items += item + '\n'
    }
    return items
  }
}

// const queue = new Queue()
// queue.enqueue(7)
// queue.enqueue(8)
// queue.enqueue(9)
// console.log( queue)
// queue.dequeue()
// console.log( queue.display())