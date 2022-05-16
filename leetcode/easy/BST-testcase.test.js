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
}

module.exports = BST