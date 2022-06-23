//https://leetcode.com/problems/balanced-binary-tree/
// TEST: npm test ./leetcode/easy/balancedBinaryTree.test.js
//0(1) - space | 0(n) - time

const BST = require("./BST-testcase.test");

describe('#Balanced Binary tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BST()
  })

  it('returns true if tree is balanced', () => {
    bst.insert(bst.root, 6); bst.insert(bst.root, 3);
    bst.insert(bst.root, 7); bst.insert(bst.root, 2);
    bst.insert(bst.root, 5);
    expect(balancedBinaryTree(bst.root)).toBe(true)
  })


  it('returns false if tree is not balanced', () => {
    bst.insert(bst.root, 6); bst.insert(bst.root, 5);
    bst.insert(bst.root, 7); bst.insert(bst.root, 4);
    bst.insert(bst.root, 8); bst.insert(bst.root, 3);
    expect(balancedBinaryTree(bst.root)).toBe(false)
  })

  it('returns false if tree is not balanced', () => {
    expect(balancedBinaryTree(bst.root)).toBe(true)
  })
})

const balancedBinaryTree = root => {
  if(!root) return true

  let output = true

  const dfs = root => {
    if(!root) return 0

    const left = dfs(root.left)
    const right = dfs(root.right)

    if(Math.abs(left - right) > 1) output = false

    return Math.max(left, right) + 1
  }
  dfs(root)
  return output
}