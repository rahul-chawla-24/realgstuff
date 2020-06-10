class Node {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
  }
  insert(value) {
    if (!this.value) {
      this.value = value;
      return;
    }

    if (value <= this.value) {
      // inserting to left side when the value is less than current value
      if (this.left) {
        return this.left.insert(value);
      } else {
        this.left = new Node(value);
        this.left.parent = this;
      }
    } else {
      // inserting to right side when the value is more than current value
      if (this.right) {
        return this.right.insert(value);
      } else {
        this.right = new Node(value);
        this.right.parent = this;
      }
    }
  }
  maxDepth() {
    let result = maxDepthHelper(this);
    return result;
  }
}

class BST {
  constructor() {
    this.root = new Node();
  }

  insert(value) {
    this.root.insert(value);
  }

  maxDepth() {
    return this.root.maxDepth();
  }
}

const maxDepthHelper = node => {
  if (node == null) {
    return 0;
  }
  return Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1;
};

let binaryTree = new BST();
binaryTree.insert(13);
binaryTree.insert(44);
binaryTree.insert(50);
binaryTree.insert(27);
binaryTree.insert(11);
console.log(binaryTree.maxDepth());
