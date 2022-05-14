//TEST: npm test ./data-structures/binary-search-trees/BSTsearches.test.js

const BST = require("./traverseBST.test");


describe('#BST Searches', () => {
  let bst;

  beforeEach(() => {
    bst = new BST()
    bst.insert(bst.root, 23); bst.insert(bst.root, 16)
    bst.insert(bst.root, 45); bst.insert(bst.root, 37)
    bst.insert(bst.root, 99); bst.insert(bst.root, 3)
    bst.insert(bst.root, 22)
  })

  it('find the minimun element in a BST search tree', () => {
    expect(findMin(bst.root).data).toBe(3)
  })

  it('find the maximum element in a BST search tree', () => {
    expect(findMax(bst.root)).toBe(99)
  })

  it('finds a specific value in the tree', () => {
    expect(findVal(bst.root, 45)).toBe(true)
    expect(findVal(bst.root, 95)).toBe(null)
  })
})



const findMin = (root) => {
  if (!root) return -1

  else if (root.left) { return findMin(root.left) }

  else return root
}

const findMax = (root) => {
  if (!root) return -1

  else if (root.right) {
    return findMax(root.right)
  }

  else return root.data
}

const findVal = (root, data) => {
  if (!root) return null

  if (data === root.data) return true
  else if (data < root.data) return findVal(root.left, data)
  else return findVal(root.right, data)
}

module.exports = { findMin }