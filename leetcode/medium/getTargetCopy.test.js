// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
// TEST: npm test ./leetcode/medium/getTargetCopy.test.js
// 0(n) - time | 0(1) - space

const BST = require("../easy/BST-testcase.test");

describe('#Get target copy from a cloned BT', () => {
  let p, q;

  beforeEach(() => {
    p = new BST()
    p.insert(p.root, 60); p.insert(p.root, 10)
    p.insert(p.root, 40); p.insert(p.root, 70)
    p.insert(p.root, 20); p.insert(p.root, 5)
    q = p.copy()
  })

  it('returns the target in the cloned tree', () => {
    expect(getTargetCopy(p.root, q, 20).data).toBe(20)
    expect(getTargetCopy(p.root, q, 60).data).toBe(60)
  })
})



const getTargetCopy = (original, cloned, target) => {
  if (!original || !cloned) return
  const dfs = (original, copy) => {
    if (!original) return

    if (original.data === target) return copy // in leetcode playground, compare the original node, not just the target. This will cover the edge case of duplicate values

    let left = dfs(original.left, copy.left)
    let right = dfs(original.right, copy.right)

    return left || right
  }

  return dfs(original, cloned)
}