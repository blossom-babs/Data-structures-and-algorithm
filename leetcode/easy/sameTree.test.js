// https://leetcode.com/problems/same-tree/
// TEST: npm test ./leetcode/easy/sameTree.test.js

const BST = require("./BST-testcase.test");

describe('#Same Tree', () => {
  let p, q;

  beforeEach(() => {
    p = new BST()
    q = new BST()
  })

  it('returns true if trees have the same node and value', () => {
    p.insert(p.root, 3); p.insert(p.root, 4); p.insert(p.root, 2)
    q.insert(q.root, 3); q.insert(q.root, 4); q.insert(q.root, 2)
    expect(sameTree(p.root, q.root)).toBe(true)
  })

  it('returns false if trees do not have the same node and value', () => {
    p.insert(p.root, 3); p.insert(p.root, 4); p.insert(p.root, 2)
    q.insert(q.root, 3);
    expect(sameTree(p.root, q.root)).toBe(false)
  })

  it('returns true if trees are null', () => {
    expect(sameTree(p.root, q.root)).toBe(true)
  })

})

const sameTree = (p, q) => {
  if(!p && !q) return true
  if(!p || !q || p.data !== q.data) return false
  return sameTree(p.left, q.left) && sameTree(p.right, q.right)
}