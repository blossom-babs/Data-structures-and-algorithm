// BINARY TEST CASE FOR LEETCODE BINARY TREE PROBLEMS
// TEST: npm test ./leetcode/easy/BST-testcase.test.js

describe('#Binary Tree Testcase', () => {
  let bst;

  beforeEach(() => {
    bst = new BST()
  })

  xit('inserts node into an empty binary tree', () => {
    bst.insert(bst.root, 10); bst.insert(bst.root, -10); bst.insert(bst.root, 200);
    bst.insert(bst.root, 5); bst.insert(bst.root, -1); bst.insert(bst.root, 0);
    expect(bst.root.left.right.left.right.data).toBe(0)
  })

  xit('expects null in an empty binary tree', () => {
    expect(bst.root).toBe(null)
  })

  xit('copies new node', () => {
    bst.insert(bst.root, 10); bst.insert(bst.root, -10); bst.insert(bst.root, 200);
    bst.insert(bst.root, 5); bst.insert(bst.root, -1); bst.insert(bst.root, 0);
    let clone = bst.copy()
    expect(clone.left.right.left.right.data).toBe(0)
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

  copy(node = this.root) {
    if (!node) return null
    let newNode = new Node(node.data)
    newNode.left = this.copy(node.left)
    newNode.right = this.copy(node.right)
    return newNode
  }
}

module.exports = BST