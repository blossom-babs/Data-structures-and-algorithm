
const BNode = require("./insertBST.test");

/* There are 4 types of traversal

1. inorder traversal
2. preorder traversal
3. postorder traversal

*/


// inserting using recursion
class BST {

  constructor() {
    this.root = null
  }

  inOrder(node) {
    if (node) {
      this.inOrder(node.left)
      console.log(node.data)
      this.inOrder(node.right)
    }
  }

  preOrder(node) {
    if (node) {
      console.log(node.data)
      this.preOrder(node.left)
      this.inOrder(node.right)
    }
  }

  postOrder(node) {
    if (node) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.data)
    }
  }

  insert(root, data) {
    let newNode = new BNode(data)

    if (!root) {
      this.root = newNode
      return root
    }

    if (data < root.data) {
      if (!root.left) root.left = newNode
      else this.insert(root.left, data)
    } else {
      if (!root.right) root.right = newNode
      else this.insert(root.right, data)
    }

    return root
  }


}

module.exports = BST