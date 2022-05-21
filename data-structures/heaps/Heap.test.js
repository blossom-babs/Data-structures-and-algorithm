class Heap {
  constructor() {
    this.items = []
    this.size = 0
  }
  swap(idx1, idx2) {
    let temp = this.items[idx1]
    this.items[idx1] = this.items[idx2]
    this.items[idx2] = temp
  }
  parentIdx(idx) {
    return Math.floor((idx - 1) / 2)
  }
  leftChildIdx(idx) {
    return (idx * 2) + 1
  }
  rightChildIdx(idx) {
    return (idx * 2) + 2
  }
  parent(idx) {
    return this.items[this.parentIdx(idx)]
  }
  leftChild(idx) {
    return this.items[this.leftChildIdx(idx)]
  }
  rightChild(idx) {
    return this.items[this.rightChildIdx(idx)]
  }

  hasParent(idx) {
    return this.parentIdx(idx) >= 0
  }

  hasLeftChild(idx){
    return this.leftChildIdx(idx) < this.size
  }

  hasRightChild(idx){
    return this.rightChildIdx(idx) < this.size
  }
}

module.exports = Heap








