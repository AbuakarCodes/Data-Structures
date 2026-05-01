import Queue from "../../Queue/queue.js";

class TreeNode {
    constructor(value = null) {
        this.value = value;      // the data stored in this node
        this.left = null;        // pointer to left child
        this.right = null;       // pointer to right child
    }

    isLeaf() {
        return this.left === null && this.right === null;
    }
}

class BinarySerchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new TreeNode(value)
        let currentNode = this.root

        if (currentNode == null) {
            this.root = node
            return
        }


        while (1) {
            if (currentNode.value === value) {
                console.log("SAME VALUE")
                return
            }

            if (value > currentNode.value) {
                if (currentNode.right == null) {
                    currentNode.right = node
                    return
                }
                currentNode = currentNode.right
            }

            if (value < currentNode.value) {
                if (currentNode.left == null) {
                    currentNode.left = node
                    return
                }
                currentNode = currentNode.left
            }

        }

    }

    // Every resursive call gets a root relative to the subtree 
    // Each recursive call creates its own execution context.
    // If we place a print statement at the beginning of the function,
    // the node’s value is printed immediately (pre-order behavior).
    // If we place it at the end, the value is printed only after
    // both recursive calls complete and return (post-order behavior).  

    preorder(node = this.root, array = []) {
        if (node == null) return array

        array.push(node.value)

        this.preorder(node.left, array)
        this.preorder(node.right, array)

        return array
    }

    postorder(node = this.root, array = []) {
        if (node == null) return array
        this.postorder(node.left, array)
        this.postorder(node.right, array)
        array.push(node.value)
        return array
    }

    inorder(node = this.root, array = []) {
        if (node == null) return array
        this.inorder(node.left, array)
        array.push(node.value)
        this.inorder(node.right, array)
        return array
    }

    levelOerderTriversal() {
        const queue = new Queue()

        queue.enqueue(this.root)

        while (!queue.isEmpty()) {
            let node = queue.dequeue()
            console.log(node.value)

            if (node.left) queue.enqueue(node.left)
            if (node.right) queue.enqueue(node.right)
        }
    }

    delete(root = this.root, value) {
        if (value == null) throw Error("VALUE PARAMETER IS EMPTY AT DELETE FUNCTION")
        if (this.root == null) return


        if (root.value > value) {
            root.left = this.delete(root.left, value)
        } else if (root.value < value) {
            root.right = this.delete(root.right, value)
        }

        else {
            if (root.right == null) return root.left
            if (root.left == null) return root.right

            if (root.left != null && root.right != null) {
                root.left = this.delete(root.left, value)
                root.right = this.delete(root.right, value)
            }
        }


    }

}

const BST1 = new BinarySerchTree()
BST1.insert(8)   // root - middle value
BST1.insert(4)   // left subtree middle
BST1.insert(12)  // right subtree middle
BST1.insert(2)   // left-left leaf
BST1.insert(6)   // left-right leaf
BST1.insert(10)  // right-left leaf
BST1.insert(14)  // right-right leaf
// BST1.levelOerderTriversal()
console.log(BST1.inorder())
console.log(BST1.preorder())
console.log(BST1.postorder())


//       8          ← level 1
//     /   \
//    4     12      ← level 2
//   / \   /  \
//  2   6 10  14    ← level 3 

















































































// function insert(root, value) {
//     const node = new TreeNode(value);

//     let insertionNode = root
//     let checkerNode = root

//     while (insertionNode.value != value && checkerNode != null) {
//         insertionNode = checkerNode
//         if (insertionNode.value > value) {
//             checkerNode = insertionNode.left
//         } else {
//             checkerNode = insertionNode.right
//         }
//     }

//     if (insertionNode.value === value) console.log("SAME VALUE")
//     if (value > insertionNode.value) insertionNode.right = node
//     if (value < insertionNode.value) insertionNode.left = node

// }

// const numbers = [14, 15, 4, 9, 7];

// // first number becomes the root
// const root = new TreeNode(numbers[0]);

// // insert all remaining numbers
// for (let i = 1; i < numbers.length; i++) {
//     insert(root, numbers[i]);
// }

// console.log("Tree built! Root value:", root.value);
// console.log("Root left child:", root.left.value);   // 4  (smaller than 14)
// console.log("Root right child:", root.right.value); // 15 (larger than 14)