//TEST: npm test ./data-structures/binary-search-trees/BSTremoveNode.test.js

const { findMin } = require("./BSTsearches.test");
const BST = require("./traverseBST.test");


describe('#BST remove node', () => {
  let bst;

  beforeEach(() => {
    bst = new BST()
    bst.insert(bst.root, 23); bst.insert(bst.root, 16)
    bst.insert(bst.root, 45); bst.insert(bst.root, 37)
    bst.insert(bst.root, 99); bst.insert(bst.root, 3)
    bst.insert(bst.root, 22); bst.insert(bst.root, 20);
  })

  it('removes a leaf node', () => {
    expect(removeNode(bst.root, 3).left.left).toBe(null)
  })

  it('removes a node with one child', () => {
    expect(removeNode(bst.root, 22).left.right.data).toBe(20)
  })
})

const removeNode = (root, data) => {

  if (!root) return null
  else if (data < root.data) {
    root.left = removeNode(root.left, data)
  } else if (data > root.data) {
    root.right = removeNode(root.right, data)
  } else {
    if ((!root.left && !root.right)) root = null
    else if (!root.left) {
      root = root.right
    } else if (!root.right) {
      root = root.left
    } else {
      temp = findMin(root.right)
      root.data = temp.data
      root.right = removeNode(root.right, temp.data)
    }
  }

  return root
} 