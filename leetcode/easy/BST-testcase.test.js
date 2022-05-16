// BINARY TEST CASE FOR LEETCODE BINARY TREE PROBLEMS
// TEST: npm test ./leetcode/easy/BST-testcase.test.js

describe('#Binary Tree Testcase', () => {
  let bst;

  beforeEach(() => {
    bst = new BST()
  })

  it('inserts node into an empty binary tree', () => {
    bst.insert(bst.root, 10); bst.insert(bst.root, -10); bst.insert(bst.root, 200);
    bst.insert(bst.root, 5); bst.insert(bst.root, -1); bst.insert(bst.root, 0);
    expect(bst.root.left.right.left.right.data).toBe(0)
  })

  it('expects null in an empty binary tree', () => {
    expect(bst.root).toBe(null)
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
    this.size = 0

  }

  insert(root, data) {
    let newNode = new Node(data)

    if (!root) {
      this.root = newNode
      this.size++
      return root
    }

    if (data === root.data) {
      root.count++
      return root
    } else if (data < root.data) {
      if (!root.left) {
        root.left = newNode
        this.size++
      }
      else this.insert(root.left, data)
    } else {
      if (!root.right) {
        root.right = newNode
        this.size++
      }
      else this.insert(root.right, data)
    }
    return root
  }
}

module.exports = BST