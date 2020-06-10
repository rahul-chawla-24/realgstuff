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

  inOrderRecursive() {
    if (this.left) {
      this.left.inOrderRecursive();
    }

    console.log(`Value is : ${this.value}`);

    if (this.right) {
      this.right.inOrderRecursive();
    }
  }

  inOrderIterative() {
    let stack = [];
    let results = [];
    let currNode = this;
    stack.push(this);
    while (stack.length) {
      while (currNode) {
        currNode = currNode.left;
        stack.push(currNode);
      }
      if (stack.length) {
        currNode = stack.pop();
      }
      if (currNode) {
        results.push(currNode.value);
        currNode = currNode.right;
        stack.push(currNode);
      }
    }
    console.log(results);
  }
  preorderRecursive() {
    console.log(`Value is : ${this.value}`);

    if (this.left) {
      this.left.preorderRecursive();
    }

    if (this.right) {
      this.right.preorderRecursive();
    }
  }
  preorderIterative() {
    let stack = [];
    let results = [];
    let currNode = this;

    if (currNode) {
      stack.push(currNode);
    }
    while (stack.length) {
      currNode = stack.pop();

      results.push(currNode.value);

      if (currNode.right) {
        stack.push(currNode.right);
      }

      if (currNode.left) {
        stack.push(currNode.left);
      }
    }
    console.log(results);
  }
}

class BST {
  constructor() {
    this.root = new Node();
  }

  insert(value) {
    this.root.insert(value);
  }

  inOrderRecursive() {
    console.log(`Inorder Recursive :`);
    this.root.inOrderRecursive();
    console.log();
  }
  inOrderIterative() {
    console.log(`Inorder Iterative :`);
    this.root.inOrderIterative();
    console.log();
  }
  preorderRecursive() {
    console.log(`Preoder Recursive :`);
    this.root.preorderRecursive();
    console.log();
  }
  preorderIterative() {
    console.log(`Preoder Iterative :`);
    this.root.preorderIterative();
    console.log();
  }
}

let binaryTree = new BST();
binaryTree.insert(55);
binaryTree.insert(40);
binaryTree.insert(22);
binaryTree.insert(24);
binaryTree.insert(88);
binaryTree.insert(24);
binaryTree.inOrderRecursive();
binaryTree.inOrderIterative();
binaryTree.preorderRecursive();
binaryTree.preorderIterative();
