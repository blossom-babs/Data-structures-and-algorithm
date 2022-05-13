// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// TEST: npm test ./leetcode/easy/maximumDepthBST.test.js

describe('#max depth of BST', () => {
    let bst;

    beforeEach(() => {
        bst = new BST()
    })

    it('returns the depth of the tree', () => {
        bst.insert(bst.root, 3)
        bst.insert(bst.root, 9); bst.insert(bst.root, 20);
        bst.insert(bst.root, 15); bst.insert(bst.root, 7)
        console.log(bst.root)
        expect(bst.maxDepth(bst.root)).toBe(4)
    })
    it('returns the depth of the tree', () => {
        bst.insert(bst.root, 3)
        expect(bst.maxDepth(bst.root)).toBe(1)
    })
    it('returns the depth of the tree', () => {
        expect(bst.maxDepth(bst.root)).toBe(0)
    })
})

class Node {
    constructor(data) {
        this.data = data
        this.left = this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(root, data) {
        let newNode = new Node(data)
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
    }

    maxDepth(root) {
        if (!root) return 0

        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
    }
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
    if (!root) return 0

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};