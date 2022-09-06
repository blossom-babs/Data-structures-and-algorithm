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

  preorder(root){
    console.log(root.data)
    if(root.left) this.preorder(root.left)
    if(root.right) this.preorder(root.right)
  }

  inorder(root){
    if(root.left) this.preorder(root.left)
    console.log(root.data)
    if(root.right) this.preorder(root.right)
  }

  postorder(root){
    if(root.left) this.preorder(root.left)
    if(root.right) this.preorder(root.right)
    console.log(root.data)
  }

  bfs(root){
    let queue = [root]
    
    while(queue.length){
      let node = queue.shift()
      console.log(node.data)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
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
// tree.inorder(tree.root)
tree.bfs(tree.root)