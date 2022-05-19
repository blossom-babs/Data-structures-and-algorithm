//TEST: npm test ./data-structures/heaps/MinHeap.test.js

const Heap = require("./Heap.test");

class MinHeap extends Heap {
  constructor() {
    super()
    this.items = []
  }

  bubbleDown() {
    let idx = 0

    while (this.leftChild(idx) && this.leftChild(idx) < this.items[idx]) {
      let smallIdx = this.leftChildIdx(idx)

      if (this.rightChild(idx) && this.rightChild(idx) < this.items[smallIdx]) {
        smallIdx = this.rightChildIdx(idx)
      }
      this.swap(smallIdx, idx)
      idx = smallIdx
    }
  }

  bubbleUp() {
    let idx = this.items.length - 1

    while (this.parent(idx) && this.parent(idx) > this.items[idx]) {
      this.swap(this.parentIdx(idx), idx)
      idx = this.parentIdx(idx)
    }
  }

  add(item) {
    this.items[this.items.length] = item
    this.bubbleUp()
  }

  poll(){
    let item = this.items[0]
    this.items[0] = this.items[this.items.length - 1]
    this.items.pop()
    this.bubbleDown()
    return item
  }
}

var mh1 = new MinHeap();
mh1.add(1);
mh1.add(10);
mh1.add(5);
mh1.add(100);
mh1.add(8);


console.log(mh1.poll()); // 1
console.log(mh1)
// console.log(mh1.poll()); // 5
// console.log(mh1.poll()); // 8
// console.log(mh1.poll()); // 10
// console.log(mh1.poll()); // 100