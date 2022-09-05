// create a Node class

class Node{
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
  }
}

let root = new Node(10)
root.right = new Node(23)
root.left = new Node(5)
root.right.left = new Node(15)
console.log(root.right.left.data)