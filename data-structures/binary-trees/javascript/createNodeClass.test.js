// create a Node class

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(root, data) {
    let newNode = new Node(data)

    if (root === null) {
      this.root = newNode
      return root
    }


    if (data < this.root.data) {
      if (this.root.left === null) {
        this.root.left = newNode
      } else {
        this.insert(root.left, data)
      }
    }

    if (data > this.root.data) {
      if (this.root.right === null) {
        this.root.right = newNode
      } else {
        this.insert(root.right, data)
      }
    }

  }
}

let tree = new BinaryTree()
tree.insert(tree.root, 10)
tree.insert(tree.root, 2)
tree.insert(tree.root, 20)
// tree.insert(tree.root, 15)
// tree.insert(tree.root, 87)
// tree.insert(tree.root, 7)
// tree.insert(tree.root, 17)



console.log(tree)