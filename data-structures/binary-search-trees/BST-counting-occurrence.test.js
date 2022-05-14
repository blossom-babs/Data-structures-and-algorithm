//TEST: npm test ./data-structures/binary-search-trees/BST-counting-occurrence.test.js

describe('#BST count occurrencr', () => {
  let bst;

  beforeEach(() => {
    bst = new BST()
    bst.insertDups(bst.root, 23); bst.insertDups(bst.root, 16)
    bst.insertDups(bst.root, 23); bst.insertDups(bst.root, 16)
    bst.insertDups(bst.root, 22); bst.insertDups(bst.root, 20);
    bst.insertDups(bst.root, 23); bst.insertDups(bst.root, 20);
  })

  it('increases the count of a node key', () => {
    expect(bst.root.count).toBe(3)
    expect(bst.root.left.right.left.count).toBe(2)
  })
})

class Node {
  constructor(data) {
    this.data = data;
    this.count = 1
    this.left = this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insertDups(root, data) {
    let newNode = new Node(data)

    if (!root) {
      this.root = newNode
      return root
    }

    if (data === root.data) {
      root.count++
      return root
    } else if (data < root.data) {
      if (!root.left) root.left = newNode
      else this.insertDups(root.left, data)
    } else {
      if (!root.right) root.right = newNode
      else this.insertDups(root.right, data)
    }
    return root
  }
}
