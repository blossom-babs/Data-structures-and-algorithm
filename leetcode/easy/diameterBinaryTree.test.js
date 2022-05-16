//https://leetcode.com/problems/diameter-of-binary-tree/
// TEST: npm test ./leetcode/easy/diameterBinaryTree.test.js

const BST = require("./BST-testcase.test");

describe('Diamter of a binary tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BST()
  })

  it('returns the diamter of a binary tree', () => {
    bst.insert(bst.root, 6); bst.insert(bst.root, 3);
    bst.insert(bst.root, 7); bst.insert(bst.root, 2);
    bst.insert(bst.root, 5);
    expect(diameterOfABinaryTree(bst.root)).toBe(3)
  })

  it('returns the diamter of a binary tree', () => {
    bst.insert(bst.root, 1); bst.insert(bst.root, 2);
    expect(diameterOfABinaryTree(bst.root)).toBe(1)
  })
})

const diameterOfABinaryTree = root => {
  let res = 0

  const dfs = root => {
    if (!root) return -1

    const left = dfs(root.left)
    const right = dfs(root.right)

    res = Math.max(res, 2 + left + right)

    return Math.max(left, right) + 1
  }
  dfs(root)
  return res
}