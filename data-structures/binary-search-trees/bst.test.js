//Test: npm test ./data-structures/binary-search-trees/bst.test.js

describe('Binary Search Trees', () => {
  let bNode;

  beforeEach(() => {
    bNode = new BST()
  })

  it('inserts into a binary search tree', () => {
    bNode.insert(4); bNode.insert(3); bNode.insert(5); bNode.insert(2)
    expect(bNode.root.data).toBe(4)
    expect(bNode.root.left.left.data).toBe(2)
  })
})

class BNode {
  constructor(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }

  show() {
    return this.data
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(data) {
    let newNode = new BNode(data, null, null)

    if (!this.root) {
      this.root = newNode
    } else {

      let current = this.root
      let parent;

      while (true) {
        parent = current

        if (data < current.data) {
          current = current.left

          if (!current) {
            parent.left = newNode
            break;
          }
        } else {
          current = current.right

          if (!current) {
            parent.right = newNode
            break;
          }
        }
      }
    }
  }
}