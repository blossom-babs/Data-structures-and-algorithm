const { readFile } = require('fs/promises');

let siblings = []

const file = async () => {
  try {
    const promise = await readFile('siblings.csv');
    siblings.push(promise.toString())
    return siblings
  } catch (err) {
    console.error(err);
  }
}


file().then((data) => {
  let bst = new BST()

  for (let d of data) {
    bst.insert(bst.root, d)
  }

})

//TEST: npm test ./data-structures/binary-search-trees/BST-insertStrings.test.js


describe('#BST insert string node', () => {
  let bst;

  beforeEach(() => {
    bst = new BST()
    bst.insert(bst.root, 'Delight')
    bst.insert(bst.root, 'Blossom');
    bst.insert(bst.root, 'Treasure'); bst.insert(bst.root, 'Royalpriest')
    bst.insert(bst.root, 'Breakthrough'); bst.insert(bst.root, 'Blossom');
    bst.insert(bst.root, 'Treasure'); bst.insert(bst.root, 'Royalpriest')
    bst.insert(bst.root, 'Breakthrough');
  })

  it('inserts strings', () => {
    expect(bst.size).toBe(5)
  })


})


class Node {
  constructor(data) {
    this.data = data
    this.left = this.right = null
    this.count = 1
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