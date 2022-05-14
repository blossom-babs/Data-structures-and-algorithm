//Test: npm test ./data-structures/binary-search-trees/traverseBST.test.js

const BNode = require("./insertBST.test");

/* There are 4 types of traversal

1. inorder traversal
2. preorder traversal
3. postorder traversal

*/

// describe('#traverse BST', () => {
//   let bst;

//   beforeEach(() => {
//     bst = new BST()
//     bst.insert(bst.root, 7); bst.insert(bst.root, 20); bst.insert(bst.root, 5);
//     bst.insert(bst.root, 15); bst.insert(bst.root, 10); bst.insert(bst.root, 4);
//     bst.insert(bst.root, 33); bst.insert(bst.root, 2); bst.insert(bst.root, 25);
//     bst.insert(bst.root, 6);
//   })

//   it('inorder traversal', () => {
//     console.log = jest.fn();
//     bst.inOrder(bst.root);
//     expect(console.log).toBeCalledTimes(10)
//     })

//   xit('preorder traversal', () => {
//     expect(bst.preOrder()).toStrictEqual([7, 2, 5, 4, 6, 20, 15, 33, 10, 25])
//   })

//   xit('postorder traversal', () => {
//     expect(bst.postOrder()).toStrictEqual([2, 4, 6, 5, 10, 15, 25, 33, 20, 7])
//   })
// })

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