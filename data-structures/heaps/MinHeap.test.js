//TEST: npm test ./data-structures/heaps/MinHeap.test.js
const Heap = require("./Heap.test");

describe('#Min-Heap', () => {
  let mh;

  beforeEach(() => {
    mh = new MinHeap()
    mh.insert(1); mh.insert(10);
    mh.insert(5); mh.insert(100);
    mh.insert(8);
  })

  it('inserts data to heap', () => {
    expect(mh.items).toStrictEqual([1, 8, 5, 100, 10])
    expect(mh.items).toHaveLength(5)
  })

  it('removed data from heap', () => {
    expect(mh.removeMin()).toBe(5)
  })
})

class MinHeap extends Heap {
  insert(data) {
    this.items[this.size] = data
    this.size++
    this.heapifyUp(this.size - 1)
  }

  heapifyUp(idx) {
    if (this.hasParent(idx) && this.parent(idx) > this.items[idx]) {
      this.swap(this.parentIdx(idx), idx)
      this.heapifyUp(this.parentIdx, idx)
    }
  }

  removeMin() {
    if (this.size === 0) {
      throw new Error('Empty Heap')
    }

    let data = this.items[0]
    this.items[0] = this.items[this.size - 1]
    this.size--
    this.heapifyDown(0)
    return data
  }

  heapifyDown(idx) {
    let smallest = idx

    if (this.hasLeftChild(idx) && this.items[smallest] > this.leftChild(idx)) {
      smallest = this.leftChildIdx(idx)
    }

    if (this.hasRightChild && this.items[smallest] > this.rightChildIdx(idx)) {
      smallest = this.rightChildIdx(idx)
    }

    if (smallest !== idx) {
      this.swap(idx, smallest)
      this.heapifyDown(smallest)
    }
  }
}