class TreeNode {
    constructor(value) {
        this.value = value;

        this.left = null;
        this.right = null;

        this.leftThread = false;
        this.rightThread = false;
    }
}

class ThreadedTree {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        const node = new TreeNode(value);

        let currentNode = this.root;
        let parent = null;

        // empty tree
        if (currentNode == null) {
            this.root = node;
            return;
        }

        while (true) {

            if (value === currentNode.value) {
                console.log("SAME VALUE");
                return;
            }

            parent = currentNode;

            // go right
            if (value > currentNode.value) {

                // if right is a thread OR null → we insert here
                if (currentNode.right == null || currentNode.rightThread) {
                    break;
                }

                currentNode = currentNode.right;
            }

            // go left
            else {

                // if left is a thread OR null → we insert here
                if (currentNode.left == null || currentNode.leftThread) {
                    break;
                }

                currentNode = currentNode.left;
            }
        }

        // =========================
        // INSERTION PHASE
        // =========================

        if (value < parent.value) {

            // predecessor thread
            node.left = parent.left;
            node.leftThread = true;

            // successor
            node.right = parent;
            node.rightThread = true;

            parent.left = node;
            parent.leftThread = false;

        } else {

            // predecessor
            node.right = parent.right;
            node.rightThread = true;

            // successor
            node.left = parent;
            node.leftThread = true;

            parent.right = node;
            parent.rightThread = false;
        }
    }
}