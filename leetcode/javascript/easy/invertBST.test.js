//https://leetcode.com/problems/invert-binary-tree/
// test: npm test ./leetcode/easy/invertBST.test.js
// 0(h) - time | 0(1) - space

describe('#invert tree', () => {
  let bst
  beforeEach(() => {
    bst = new BST()
    bst.insert(bst.root, 4)
    bst.insert(bst.root, 2); bst.insert(bst.root, 7);
    bst.insert(bst.root, 1); bst.insert(bst.root, 3)
    bst.insert(bst.root, 6); bst.insert(bst.root, 9)
  })

  it('expects tree to be inverted', () => {
    let invert = bst.invertTree(bst.root)
    expect(invert.left.data).toBe(7)
  })

})

class Node {
  constructor(data) {
    this.data = data
    this.left = this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(root, data) {
    let newNode = new Node(data)
    if (!root) {
      this.root = newNode
      return root
    }

    if (data < root.data) {
      if (!root.left) root.left = newNode
      else this.insert(root.left, data)
    } else {
      if (!root.right) root.right = newNode
      else this.insert(root.right, data)
    }
  }

  invertTree(root) {
    if (!root) return root
    let temp = root.left
    root.left = root.right
    root.right = temp

    this.invertTree(root.left)
    this.invertTree(root.right)

    return root
  }
}


const invertTree = (root) => {
  if (!root) return root

  let temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.right)
  invertTree(root.left)

  return root
};